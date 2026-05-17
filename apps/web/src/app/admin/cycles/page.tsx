'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Lock, Unlock, AlertCircle } from 'lucide-react';

export default function CyclesPage() {
  const [cycles, setCycles] = useState<any[]>([]);
  const [unlockModal, setUnlockModal] = useState(false);
  const [unlockReason, setUnlockReason] = useState('');
  const [goalId, setGoalId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/cycles').then((r) => setCycles(r.data.cycles || [])).finally(() => setLoading(false));
  }, []);

  const phaseLabels: Record<string, string> = {
    GOAL_SETTING: 'Phase 1 — Goal Setting',
    Q1: 'Q1 Check-in',
    Q2: 'Q2 Check-in',
    Q3: 'Q3 Check-in',
    Q4: 'Q4 / Annual Review'
  };

  const handleUnlock = async () => {
    if (!goalId.trim() || !unlockReason.trim()) return;
    try {
      await api.put(`/goals/${goalId}/admin-unlock`, { reason: unlockReason });
      setUnlockModal(false);
      setUnlockReason('');
      setGoalId('');
      alert('Goal unlocked. Audit log recorded.');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Unlock failed');
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Goal Cycle Management</h1>
          <p className="text-slate-500 mt-1">Phase 1: May • Q1: July • Q2: Oct • Q3: Jan • Q4: Mar/Apr</p>
        </div>

        <div className="card overflow-hidden">
          {loading ? (
            <div className="flex justify-center h-48"><div className="animate-spin h-8 w-8 border-b-2 border-slate-900 rounded-full" /></div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Window</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cycles.map((cycle) => (
                  <tr key={cycle.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-slate-400" />
                        <span className="font-medium text-slate-900">{phaseLabels[cycle.phase] || cycle.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {new Date(cycle.startDate).toLocaleDateString()} — {new Date(cycle.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={cycle.status === 'ACTIVE' ? 'success' : cycle.status === 'CLOSED' ? 'default' : 'warning'}>
                        {cycle.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      {cycle.status === 'CLOSED' && (
                        <button type="button" onClick={() => setUnlockModal(true)} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                          <Unlock size={14} /> Force Unlock
                        </button>
                      )}
                      {cycle.status === 'ACTIVE' && (
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Lock size={14} /> Currently Active
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {unlockModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="rounded-2xl bg-white p-6 shadow-2xl max-w-md w-full mx-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-100">
                  <AlertCircle size={20} className="text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Force Unlock Goal</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Enter goal ID and reason. An immutable audit log entry will be created.
              </p>
              <input className="input mb-3" placeholder="Goal ID (UUID)" value={goalId} onChange={(e) => setGoalId(e.target.value)} />
              <textarea className="input min-h-[100px] mb-4" placeholder="Reason for unlock (required)..." value={unlockReason} onChange={(e) => setUnlockReason(e.target.value)} />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setUnlockModal(false)} className="btn-secondary">Cancel</button>
                <button type="button" onClick={handleUnlock} disabled={!unlockReason.trim() || !goalId.trim()} className="btn-primary disabled:opacity-50">
                  Confirm Unlock
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
