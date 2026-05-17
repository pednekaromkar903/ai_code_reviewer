import { prisma } from '../../lib/prisma';
import { NLQueryEngine } from './nl-query.engine';
import { ChatExecutor } from './chat.executor';

const engine = new NLQueryEngine();
const executor = new ChatExecutor();

export type QueryStep = 'understand' | 'generate_sql' | 'execute' | 'format';

export class ChatService {
  async processMessage(query: string, userId: string, role: string) {
    const steps: { step: QueryStep; label: string; done: boolean }[] = [
      { step: 'understand', label: 'Understanding your question', done: false },
      { step: 'generate_sql', label: 'Converting to database query', done: false },
      { step: 'execute', label: 'Searching database', done: false },
      { step: 'format', label: 'Preparing results', done: false }
    ];

    const parsed = engine.parse(query, role);

    if ('clarification' in parsed) {
      return {
        intent: 'CLARIFICATION',
        summary: parsed.clarification,
        sql: null,
        data: [],
        chartType: 'table' as const,
        followUps: parsed.followUps,
        suggestedActions: parsed.followUps,
        steps: steps.map((s) => ({ ...s, done: s.step === 'understand' })),
        rowCount: 0
      };
    }

    const { plan } = parsed;

    if (!engine.validateSQL(plan.sql)) {
      return {
        intent: 'ERROR',
        summary: 'Could not generate a safe read-only query. Please rephrase your question.',
        sql: null,
        data: [],
        chartType: 'table' as const,
        followUps: plan.followUps,
        suggestedActions: [],
        steps,
        rowCount: 0
      };
    }

    steps[0].done = true;
    steps[1].done = true;

    const result = await executor.execute(plan, query, userId, role);

    steps[2].done = true;
    steps[3].done = true;

    await prisma.chatMessage.create({
      data: {
        userId,
        role: 'user',
        content: query,
        intentType: plan.intent
      }
    });

    await prisma.chatMessage.create({
      data: {
        userId,
        role: 'assistant',
        content: result.summary,
        intentType: plan.intent,
        metadata: JSON.stringify({
          sql: result.sql,
          rowCount: result.rowCount,
          source: plan.source
        })
      }
    });

    return {
      ...result,
      suggestedActions: result.followUps,
      steps
    };
  }
}
