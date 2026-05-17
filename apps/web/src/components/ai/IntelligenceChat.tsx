'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { api } from '@/lib/api';
import { useAuthStore } from '@/hooks/useAuth';
import { AtombergLogo } from '@/components/brand/AtombergLogo';
import {
  Send, User, Loader2, ChevronDown, ChevronUp, Database,
  Code2, Table2, Sparkles, CheckCircle2, Circle, WifiOff
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Cell
} from 'recharts';

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  sql?: string | null;
  data?: Record<string, unknown>[] | Record<string, unknown>;
  chartType?: string;
  followUps?: string[];
  suggestedActions?: string[];
  steps?: { step: string; label: string; done: boolean }[];
  intent?: string;
}

interface IntelligenceChatProps {
  mode?: 'full' | 'widget';
  onClose?: () => void;
}

const GOLD = '#fdb913';
const CHART_COLORS = ['#fdb913', '#0a0a0a', '#3b82f6', '#10b981', '#f59e0b'];

const STARTER_PROMPTS = [
  { label: 'Completion rate', query: 'What is my goal completion rate?' },
  { label: 'Line 3 rejection', query: "What's the rejection rate from manufacturing line 3?" },
  { label: 'B2B vs D2C', query: 'Compare B2B vs D2C revenue this quarter' },
  { label: 'Behind target', query: 'Which goals are behind target?' },
  { label: 'Achievement report', query: 'Show achievement report planned vs actual' },
  { label: 'L1 vendors', query: 'Which vendors are behind on L1 procurement targets?' },
];

const ATOMBERG_KB = [
  "Atomberg Technologies is India's leading energy-efficient BLDC fan and appliance company founded by Manoj Meena and Sibabrata Das in 2012.",
  "Atomberg products include Efficio, Renesa, and Studio smart BLDC fans, as well as smart mixer grinders.",
  "Our BLDC motors use 65% less energy than conventional induction motor fans.",
  "We have 4000+ service centers, 15,000+ retail touchpoints, and our manufacturing is based in Gujarat.",
  "We were featured on Shark Tank India and have sold over 1 Crore+ fans."
];

export function IntelligenceChat({ mode = 'full', onClose }: IntelligenceChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [expandedSql, setExpandedSql] = useState<Record<number, boolean>>({});
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();
  const isWidget = mode === 'widget';

  const scrollToEnd = useCallback(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToEnd(); }, [messages, loading, scrollToEnd]);

  useEffect(() => {
    const checkAiHealth = async () => {
      try {
        const res = await api.get('/ai/health');
        if (res.status === 503 || res.status === 500) {
          setIsOfflineMode(true);
        }
      } catch (err) {
        setIsOfflineMode(true);
      }
    };
    checkAiHealth();
  }, []);

  useEffect(() => {
    if (!loading) return;
    const t = setInterval(() => setLoadingStep((s) => (s + 1) % 4), 600);
    return () => clearInterval(t);
  }, [loading]);

  const isOnTopic = (q: string) => {
    const offTopicKeywords = ['target corporation', 'walmart', 'amazon', 'google', 'microsoft', 'apple', 'tesla', 'netflix', 'meta', 'facebook', 'openai', 'capital of', 'president of', 'prime minister', 'weather', 'sports', 'cricket', 'football', 'ipl', 'movie', 'actor', 'singer', 'celebrity', 'dating', 'relationship', 'health', 'medical', 'doctor', 'legal', 'lawyer', 'investment', 'stock market', 'crypto', 'bitcoin', 'react tutorial', 'python', 'javascript', 'css', 'html', 'how to code', 'programming', 'bjp', 'congress', 'election', 'modi', 'trump', 'biden', 'hindu', 'muslim', 'christian', 'islam', 'temple', 'mosque'];
    const lowerQ = q.toLowerCase();
    return !offTopicKeywords.some(kw => lowerQ.includes(kw));
  };

  const getMockResponse = (q: string) => {
    if (!isOnTopic(q)) {
      return "I have no idea. I only assist with Atomberg Goal Portal queries.";
    }

    if (q.toLowerCase().includes('atomberg') || q.toLowerCase().includes('bldc') || q.toLowerCase().includes('fan')) {
      return ATOMBERG_KB[Math.floor(Math.random() * ATOMBERG_KB.length)];
    }

    const role = user?.role || 'EMPLOYEE';
    if (role === 'ADMIN') {
      return "Company-wide: 150 goals created this cycle, 78% on track. B2B leads at 110% average, Manufacturing at 92%, R&D at 115%. Q2 check-ins: 45 completed, 15 pending. 8 goals are at risk across all departments.";
    } else if (role === 'MANAGER') {
      return "Your team has 12 goals. Average achievement: 95%. 3 members have pending Q2 check-ins. Top performer: Ramesh Kumar at 120%. 2 goals are at risk — 'Launch mixer grinder pilot' at 50% and 'Deploy 500 fans' at 66.7%.";
    } else {
      return "You have 5 goals this cycle with 108.3% average achievement. Your top performer is 'Reduce B2B TAT to 48 hours' at 108.3%. You have 1 pending Q2 check-in due in 3 days.";
    }
  };

  const send = async (text: string = input) => {
    if (!text.trim() || loading) return;
    const q = text.trim();
    setMessages((m) => [...m, { role: 'user', content: q }]);
    setInput('');
    setLoading(true);
    setLoadingStep(0);

    try {
      const res = await api.post('/ai/query', { query: q });
      setMessages((m) => [
        ...m,
        {
          role: 'ai',
          content: res.data.summary || 'No response',
          sql: res.data.sql,
          data: res.data.data || [],
          intent: res.data.intent || 'GENERAL',
          chartType: res.data.chartType,
          followUps: res.data.suggestedActions || [],
          steps: res.data.steps || [{ step: '1', label: 'Processed by Atomberg Intelligence', done: true }]
        },
      ]);
    } catch (err: any) {
      console.error('Chat Error:', err);
      const responseText = getMockResponse(q);
      setMessages((m) => [
        ...m,
        {
          role: 'ai',
          content: responseText,
          sql: null,
          data: [],
          intent: 'MOCK_RESPONSE',
          steps: [{ step: '1', label: 'Used AI Fallback Mode', done: true }]
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderMetric = (data: Record<string, unknown>[]) => {
    const row = data[0];
    if (!row) return null;
    const entries = Object.entries(row).filter(([k]) => k !== 'id');
    return (
      <div className="grid grid-cols-2 gap-2 mt-3">
        {entries.map(([k, v]) => (
          <div key={k} className="rounded-lg bg-atomberg-charcoal/5 border border-atomberg-gold/20 p-3">
            <p className="text-[10px] uppercase tracking-wider text-atomberg-muted">{k.replace(/_/g, ' ')}</p>
            <p className="text-lg font-bold text-atomberg-black">{String(v)}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderChart = (data: Record<string, unknown>[], chartType?: string) => {
    if (!data?.length) return null;
    if (chartType === 'line' && (data[0]?.date || data[0]?.rejection_rate != null)) {
      return (
        <div className="mt-3 h-48 w-full rounded-lg bg-white border border-gray-100 p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 9 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 9 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #fdb913' }} />
              <Line type="monotone" dataKey="rejection_rate" stroke={GOLD} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }
    if (chartType === 'bar' || data[0]?.channel || data[0]?.department) {
      const dataKey = data[0]?.revenue_cr ? 'revenue_cr' : data[0]?.employee_count != null ? 'employee_count' : data[0]?.revenue != null ? 'revenue' : 'count';
      const xKey = data[0]?.month ? 'month' : data[0]?.department ? 'department' : data[0]?.channel ? 'channel' : 'name';
      return (
        <div className="mt-3 h-48 w-full rounded-lg bg-white border border-gray-100 p-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.slice(0, 12)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey={xKey} tick={{ fontSize: 8 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 9 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #fdb913' }} />
              <Bar dataKey={dataKey} radius={[4, 4, 0, 0]}>
                {data.slice(0, 12).map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    const keys = Object.keys(data[0]);
    return (
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
        <div className="flex items-center gap-2 bg-atomberg-black px-3 py-2 text-atomberg-gold text-xs font-medium">
          <Table2 size={14} /> Query Results ({data.length} rows)
        </div>
        <div className="max-h-48 overflow-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-50 sticky top-0">
              <tr>{keys.map((k) => (
                <th key={k} className="px-3 py-2 text-left font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap">
                  {k.replace(/_/g, ' ')}
                </th>
              ))}</tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.slice(0, 10).map((row, i) => (
                <tr key={i} className="hover:bg-amber-50/50">
                  {keys.map((k) => (
                    <td key={k} className="px-3 py-2 text-gray-800 whitespace-nowrap">{String(row[k] ?? '—')}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.length > 10 && <p className="px-3 py-1.5 text-[10px] text-gray-400 bg-gray-50">+ {data.length - 10} more rows</p>}
      </div>
    );
  };

  const pipelineSteps = [
    'Understanding your question',
    'Converting natural language → SQL',
    'Executing database query',
    'Formatting insights',
  ];

  const containerClass = isWidget
    ? 'flex h-full flex-col bg-gradient-to-b from-atomberg-charcoal to-atomberg-black text-white'
    : 'flex h-[calc(100dvh-13rem)] md:h-[calc(100vh-7rem)] flex-col rounded-2xl overflow-hidden shadow-atomberg-lg border border-atomberg-gold/20 bg-white';

  return (
    <div className={containerClass}>
      <div className={`flex items-center justify-between px-5 py-4 ${isWidget ? 'border-b border-white/10' : 'bg-gradient-to-r from-atomberg-black via-atomberg-charcoal to-atomberg-black'}`}>
        <div className="flex items-center gap-3">
          <AtombergLogo size={isWidget ? 'sm' : 'md'} variant="light" />
          {isOfflineMode && (
            <span className="flex items-center gap-1.5 rounded-full bg-red-500/20 px-2.5 py-1 text-[10px] font-medium text-red-200 border border-red-500/30">
              <WifiOff size={12} />
              Offline Mode
            </span>
          )}
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-gray-200 border border-white/20">
            Speaking as: {user?.role || 'EMPLOYEE'}
          </span>
        </div>
        {!isWidget && (
          <div className="hidden sm:flex items-center gap-2 text-xs text-atomberg-gold/80">
            <Database size={14} />
            <span>NL → SQL • Read-only • Live data</span>
          </div>
        )}
      </div>

      <div className={`flex-1 overflow-y-auto ${isWidget ? 'p-3 space-y-3 bg-atomberg-charcoal/50' : 'p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white'}`}>
        {messages.length === 0 && (
          <div className="animate-slide-up space-y-4">
            <div className={`rounded-xl p-4 ${isWidget ? 'bg-white/5 border border-white/10' : 'bg-atomberg-black text-white'}`}>
              <p className={`text-sm ${isWidget ? 'text-gray-300' : 'text-gray-200'}`}>
                Hello <strong className="text-atomberg-gold">{user?.name?.split(' ')[0] || 'there'}</strong> — ask anything in plain English.
                I convert your question into a safe database query and return live results.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {STARTER_PROMPTS.slice(0, isWidget ? 4 : 6).map((p) => (
                <button
                  key={p.query}
                  type="button"
                  onClick={() => send(p.query)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all ${
                    isWidget
                      ? 'bg-white/5 border border-white/10 hover:border-atomberg-gold/50 hover:bg-white/10 text-gray-200'
                      : 'bg-white border border-gray-200 hover:border-atomberg-gold hover:shadow-md text-gray-800'
                  }`}
                >
                  <span><span className="font-semibold text-atomberg-gold">{p.label}</span> — {p.query}</span>
                  <Sparkles size={14} className="opacity-0 group-hover:opacity-100 text-atomberg-gold transition-opacity shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 animate-slide-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
              msg.role === 'user' ? 'bg-atomberg-gold text-atomberg-black' : 'bg-atomberg-black text-atomberg-gold ring-2 ring-atomberg-gold/30'
            }`}>
              {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
            </div>
            <div className={`max-w-[92%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'bg-atomberg-gold text-atomberg-black rounded-tr-sm font-medium'
                : isWidget
                  ? 'bg-white/10 border border-white/10 text-gray-100 rounded-tl-sm'
                  : 'bg-white border border-gray-200 shadow-sm text-gray-800 rounded-tl-sm'
            }`}>
              {msg.intent && msg.role === 'ai' && (
                <span className="inline-block mb-2 rounded-full bg-atomberg-gold/20 text-atomberg-gold-dark px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {msg.intent.replace(/_/g, ' ')}
                </span>
              )}
              <p className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>

              {msg.sql && (
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setExpandedSql((e) => ({ ...e, [i]: !e[i] }))}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium ${
                      isWidget ? 'bg-black/40 text-atomberg-gold' : 'bg-gray-900 text-emerald-400'
                    }`}
                  >
                    <span className="flex items-center gap-2"><Code2 size={14} /> Generated SQL</span>
                    {expandedSql[i] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {expandedSql[i] && (
                    <pre className={`mt-1 overflow-x-auto rounded-b-lg p-3 text-[11px] leading-relaxed font-mono ${
                      isWidget ? 'bg-black/60 text-emerald-300' : 'bg-gray-950 text-emerald-400'
                    }`}>{msg.sql}</pre>
                  )}
                </div>
              )}

              {msg.data && Array.isArray(msg.data) && msg.data.length > 0 && (
                msg.chartType === 'metric' ? renderMetric(msg.data) : renderChart(msg.data, msg.chartType)
              )}

              {(msg.followUps || msg.suggestedActions) && msg.role === 'ai' && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                  {(msg.followUps || msg.suggestedActions)!.slice(0, 4).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => send(f)}
                      className="rounded-full border border-atomberg-gold/40 bg-atomberg-gold/10 px-3 py-1 text-[11px] font-medium text-atomberg-gold hover:bg-atomberg-gold/20 transition-colors"
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className={`rounded-xl p-4 ${isWidget ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-sm'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Loader2 className="animate-spin text-atomberg-gold" size={18} />
              <span className={`text-sm font-medium ${isWidget ? 'text-white' : 'text-gray-800'}`}>Processing your query…</span>
            </div>
            <div className="space-y-2">
              {pipelineSteps.map((label, idx) => (
                <div key={label} className="flex items-center gap-2 text-xs">
                  {idx < loadingStep ? (
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  ) : idx === loadingStep ? (
                    <Loader2 size={14} className="animate-spin text-atomberg-gold" />
                  ) : (
                    <Circle size={14} className="text-gray-400" />
                  )}
                  <span className={idx <= loadingStep ? (isWidget ? 'text-gray-200' : 'text-gray-700') : 'text-gray-400'}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className={`p-4 ${isWidget ? 'border-t border-white/10 bg-atomberg-black' : 'border-t border-gray-200 bg-white'}`}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            disabled={loading}
            placeholder="Ask in natural language — e.g. Show paint shop rejection rate..."
            className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all ${
              isWidget
                ? 'bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:border-atomberg-gold focus:ring-1 focus:ring-atomberg-gold'
                : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-atomberg-gold focus:ring-2 focus:ring-atomberg-gold/20'
            }`}
          />
          <button
            type="button"
            onClick={() => send()}
            disabled={loading || !input.trim()}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-atomberg-gold to-atomberg-gold-dark text-atomberg-black hover:brightness-110 disabled:opacity-40 transition-all shadow-lg shadow-atomberg-gold/25"
          >
            <Send size={18} />
          </button>
        </div>
        <p className={`text-center text-[10px] mt-2 ${isWidget ? 'text-gray-500' : 'text-gray-400'}`}>
          Powered by Atomberg Intelligence • NL→SQL • Read-only queries
        </p>
      </div>
    </div>
  );
}
