'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { Target, Plus, Lock } from 'lucide-react';

export default function GoalsPage() {
  const [goals, setGoals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  const getStatusBadge = (status: string, locked: boolean) => {
    if (locked) return <Badge variant="default"><Lock size={12} className="mr-1" /> Locked</Badge>;
    switch (status) {
      case 'COMPLETED': return <Badge variant="success">Completed</Badge>;
      case 'ON_TRACK': return <Badge variant="info">On Track</Badge>;
      case 'NOT_STARTED': return <Badge variant="warning">Not Started</Badge>;
      case 'PENDING': return <Badge variant="primary">Pending Approval</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Goals</h1>
            <p className="text-slate-500 mt-1">{goals.length} goals • Total weightage: {goals.reduce((a, g) => a + g.weightage, 0)}%</p>
          </div>
          <a href="/goals/new" className="btn-primary">
            <Plus size={16} className="mr-2" /> New Goal
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => {
            const progress = goal.targetValue > 0
              ? (Number(goal.actualValue) / Number(goal.targetValue)) * 100
              : 0;
            const isLocked = !!goal.lockedAt;

            return (
              <div key={goal.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{goal.title}</h3>
                      {getStatusBadge(goal.status, isLocked)}
                      {goal.isShared && <Badge variant="warning">Shared KPI</Badge>}
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{goal.description || 'No description'}</p>

                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <span>Thrust: <strong>{goal.thrustArea}</strong></span>
                      <span>Category: <strong>{goal.categoryType}</strong></span>
                      <span>UoM: <strong>{goal.uomType}</strong></span>
                      <span>Weight: <strong>{goal.weightage}%</strong></span>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-medium">
                          {goal.actualValue} / {goal.targetValue}
                          <span className="text-slate-400 ml-2">({progress.toFixed(1)}%)</span>
                        </span>
                      </div>
                      <Progress value={Math.min(progress, 100)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {goals.length === 0 && (
            <div className="card text-center py-16">
              <Target size={48} className="mx-auto mb-4 text-slate-300" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No goals yet</h3>
              <p className="text-slate-500 mb-4">Create your first goal to start tracking performance</p>
              <a href="/goals/new" className="btn-primary inline-flex">
                <Plus size={16} className="mr-2" /> Create Goal
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
