'use client';

import { Layout } from '@/components/layout/Layout';
import { IntelligenceChat } from '@/components/ai/IntelligenceChat';

export default function ChatPage() {
  return (
    <Layout>
      <section className="mb-6">
        <h1 className="text-2xl font-bold text-atomberg-black">Analytics Console</h1>
        <p className="text-gray-500 mt-1">
          Ask questions in natural language — Atomberg Intelligence converts them to database queries and returns live insights.
        </p>
      </section>
      <IntelligenceChat mode="full" />
    </Layout>
  );
}
