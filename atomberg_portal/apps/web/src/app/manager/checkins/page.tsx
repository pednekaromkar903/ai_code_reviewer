'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { MessageSquare, Save } from 'lucide-react';

export default function ManagerCheckinsPage() {
  const [checkIns, setCheckIns] = useState<any[]>([]);
  const [comments, setComments] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchCheckins();
  }, []);

  const fetchCheckins = async () => {
    try {
      const res = await api.get('/checkins');
      setCheckIns(res.data.checkIns || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveComment = async (checkInId: string, goalId: string) => {
    const comment = comments[checkInId];
    if (!comment?.trim()) return;
    setSaving(checkInId);
    try {
      const ci = checkIns.find((c) => c.id === checkInId);
      await api.post('/checkins', {
        goalId,
        quarter: 'Q2',
        actualValue: Number(ci?.actualValue) || 0,
        status: ci?.status || 'ON_TRACK',
        managerComment: comment
      });
      fetchCheckins();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Team Check-ins</h1>
          <p className="text-slate-500 mt-1">Planned vs Actual — Q2 2026 quarterly review</p>
        </div>

        <div className="card overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Goal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Planned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actual</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {checkIns.map((ci) => (
                <tr key={ci.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{ci.goal?.employee?.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 max-w-xs">{ci.goal?.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{Number(ci.plannedValue)}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{Number(ci.actualValue)}</td>
                  <td className="px-6 py-4">
                    <div className="w-24">
                      <Progress value={Math.min(Number(ci.computedScore) * 100, 100)} />
                      <span className="text-xs text-slate-500">{Number(ci.computedScore).toFixed(2)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={ci.status === 'COMPLETED' ? 'success' : 'info'}>{ci.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {checkIns.length === 0 && (
            <p className="px-6 py-12 text-center text-slate-400">No check-ins recorded yet.</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <MessageSquare size={20} /> Manager Discussion Logs
          </h2>
          {checkIns.map((ci) => (
            <div key={ci.id} className="card">
              <p className="font-medium text-slate-900 text-sm mb-1">{ci.goal?.title}</p>
              <p className="text-xs text-slate-500 mb-3">{ci.goal?.employee?.name} • Q2</p>
              {ci.managerComment && (
                <p className="text-sm text-slate-600 mb-3 bg-slate-50 rounded-lg p-3">{ci.managerComment}</p>
              )}
              <textarea
                className="input min-h-[80px] text-sm"
                placeholder="Add structured check-in discussion notes..."
                value={comments[ci.id] ?? ''}
                onChange={(e) => setComments({ ...comments, [ci.id]: e.target.value })}
              />
              <button
                type="button"
                onClick={() => saveComment(ci.id, ci.goalId)}
                disabled={saving === ci.id}
                className="btn-primary mt-3 text-sm"
              >
                <Save size={14} className="mr-2 inline" />
                {saving === ci.id ? 'Saving...' : 'Save Comment'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
