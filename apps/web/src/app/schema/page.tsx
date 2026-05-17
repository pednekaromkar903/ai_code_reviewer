'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Table2, Database, Link2 } from 'lucide-react';

export default function SchemaPage() {
  const [tables, setTables] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/intelligence/schema').then((r) => {
      setTables(r.data.tables || []);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Database size={24} /> Schema Explorer
          </h1>
          <p className="text-slate-500 mt-1">Auto-discovered tables from connected Atomberg Legacy DB</p>
        </div>

        {loading ? (
          <div className="flex justify-center h-64"><div className="animate-spin h-10 w-10 border-b-2 border-slate-900 rounded-full" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tables.map((t) => (
              <div key={t.name} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <Table2 size={18} className="text-indigo-600" />
                  <h3 className="font-semibold text-slate-900 font-mono text-sm">{t.name}</h3>
                  {t.rowCount != null && <span className="text-xs bg-slate-100 px-2 py-0.5 rounded">{t.rowCount} rows</span>}
                </div>
                <p className="text-sm text-slate-500 mb-3">{t.description}</p>
                <div className="space-y-1">
                  {t.columns?.map((c: any) => (
                    <div key={c.name} className="flex justify-between text-xs font-mono bg-slate-50 rounded px-2 py-1">
                      <span>{c.name}</span>
                      <span className="text-slate-400">{c.type}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs text-indigo-600">
                  <Link2 size={12} /> Query via <a href="/chat" className="underline">Atomberg Intelligence</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
