'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Shield, Clock, User, ArrowRight } from 'lucide-react';

export default function AuditPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await api.get('/audit/all');
      setLogs(res.data.logs || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Audit Trail</h1>
            <p className="text-slate-500 mt-1">Immutable record of all post-lock changes</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium">
            <Shield size={16} /> IPO-Ready Compliance
          </div>
        </div>

        <div className="card overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Field</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Changes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-slate-400" />
                        {new Date(log.changedAt).toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-slate-400" />
                        <span className="font-medium text-slate-900">{log.user?.name}</span>
                        <span className="text-xs text-slate-400">({log.user?.role})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        log.actionType === 'APPROVAL' ? 'bg-emerald-100 text-emerald-700' :
                        log.actionType === 'ADMIN_UNLOCK' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {log.actionType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{log.fieldName}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 line-through">{log.oldValue || 'N/A'}</span>
                        <ArrowRight size={14} className="text-slate-400" />
                        <span className="text-emerald-600 font-medium">{log.newValue || 'N/A'}</span>
                      </div>
                    </td>
                  </tr>
                ))}
                {logs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      No audit logs found. Changes will appear here after goal approvals.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
}
