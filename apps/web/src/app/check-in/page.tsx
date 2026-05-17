'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function CheckInPage() {
  const [goals, setGoals] = useState<any[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [actualValue, setActualValue] = useState('');
  const [status, setStatus] = useState('ON_TRACK');
  const [managerComment, setManagerComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await api.get('/goals');
      setGoals(res.data.goals || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGoal) return;

    setSubmitting(true);
    setMessage('');
    try {
      await api.post('/checkins', {
        goalId: selectedGoal.id,
        quarter: 'Q2',
        actualValue: Number(actualValue),
        status,
        managerComment
      });
      setMessage('Check-in submitted successfully!');
      setSelectedGoal(null);
      setActualValue('');
      setManagerComment('');
      fetchGoals();
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to submit check-in');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quarterly Check-in</h1>
          <p className="text-slate-500 mt-1">Q2 2026 • Update your actual achievements against planned targets</p>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Select Goal to Update</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal) => {
              const progress = goal.targetValue > 0
                ? (Number(goal.actualValue) / Number(goal.targetValue)) * 100
                : 0;
              return (
                <button
                  key={goal.id}
                  onClick={() => {
                    setSelectedGoal(goal);
                    setActualValue(goal.actualValue?.toString() || '');
                  }}
                  className={`rounded-lg border-2 p-4 text-left transition-all ${
                    selectedGoal?.id === goal.id
                      ? 'border-slate-900 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-slate-900 text-sm">{goal.title}</h3>
                    <Badge variant={goal.status === 'COMPLETED' ? 'success' : 'info'}>
                      {goal.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{goal.uomType} • Weight: {goal.weightage}%</p>
                  <Progress value={Math.min(progress, 100)} />
                  <p className="text-xs text-slate-500 mt-1">
                    Current: {goal.actualValue} / {goal.targetValue}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {selectedGoal && (
          <form onSubmit={handleSubmit} className="card space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-slate-100">
                <CheckCircle2 size={20} className="text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{selectedGoal.title}</h3>
                <p className="text-sm text-slate-500">Target: {selectedGoal.targetValue} • UoM: {selectedGoal.uomType}</p>
              </div>
            </div>

            {message && (
              <div className={`rounded-lg p-4 flex items-start gap-3 ${message.includes('success') ? 'bg-emerald-50' : 'bg-red-50'}`}>
                <AlertCircle size={20} className={message.includes('success') ? 'text-emerald-600' : 'text-red-600'} />
                <p className={`text-sm ${message.includes('success') ? 'text-emerald-700' : 'text-red-700'}`}>{message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label">Actual Achievement</label>
                <input
                  type="number"
                  step="0.01"
                  className="input mt-1"
                  placeholder={`Previous: ${selectedGoal.actualValue}`}
                  value={actualValue}
                  onChange={(e) => setActualValue(e.target.value)}
                  required
                />
                <p className="text-xs text-slate-400 mt-1">Planned Target: {selectedGoal.targetValue}</p>
              </div>

              <div>
                <label className="label">Status</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {['NOT_STARTED', 'ON_TRACK', 'COMPLETED'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(s)}
                      className={`rounded-lg border-2 py-2 px-3 text-xs font-medium transition-all ${
                        status === s
                          ? 'border-slate-900 bg-slate-50 text-slate-900'
                          : 'border-slate-200 text-slate-500 hover:border-slate-300'
                      }`}
                    >
                      {s.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="label">Manager Comment / Discussion Notes</label>
                <textarea
                  className="input mt-1 min-h-[100px]"
                  placeholder="Document the quarterly discussion, blockers, and next steps..."
                  value={managerComment}
                  onChange={(e) => setManagerComment(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedGoal(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : <><ArrowRight size={16} className="mr-2" /> Submit Check-in</>}
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
