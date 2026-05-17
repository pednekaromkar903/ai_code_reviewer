'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { ChatWidget } from '@/components/ai/ChatWidget';
import {
  Target, TrendingUp, AlertCircle,
  CheckCircle2, Clock, ArrowRight
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';

export default function DashboardPage() {
  const [goals, setGoals] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, onTrack: 0, notStarted: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await api.get('/goals');
      const g = res.data.goals || [];
      setGoals(g);
      setStats({
        total: g.length,
        completed: g.filter((x: any) => x.status === 'COMPLETED').length,
        onTrack: g.filter((x: any) => x.status === 'ON_TRACK').length,
        notStarted: g.filter((x: any) => x.status === 'NOT_STARTED').length,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLETED': return <Badge variant="success">Completed</Badge>;
      case 'ON_TRACK': return <Badge variant="info">On Track</Badge>;
      case 'NOT_STARTED': return <Badge variant="warning">Not Started</Badge>;
      case 'PENDING': return <Badge variant="primary">Pending Approval</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  const completionRate = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  const chartData = [
    { name: 'Completed', value: stats.completed, fill: '#10b981' },
    { name: 'On Track', value: stats.onTrack, fill: '#3b82f6' },
    { name: 'Not Started', value: stats.notStarted, fill: '#f59e0b' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Track your goals and performance metrics</p>
        </div>
        <a href="/goals/new" className="btn-primary">
          Create Goal <ArrowRight size={16} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Total Goals" value={stats.total} icon={Target} />
        <Card title="Completed" value={stats.completed} subtitle={`${completionRate.toFixed(0)}% completion rate`} icon={CheckCircle2} trend={completionRate - 50} />
        <Card title="On Track" value={stats.onTrack} icon={TrendingUp} />
        <Card title="Pending" value={stats.notStarted} icon={AlertCircle} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Current Goals</h2>
            <Badge variant="primary">Q2 2026</Badge>
          </div>
          <div className="space-y-4">
            {goals.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                <Target size={48} className="mx-auto mb-3 opacity-50" />
                <p>No goals yet. Create your first goal to get started.</p>
              </div>
            )}
            {goals.map((goal: any) => {
              const progress = goal.targetValue > 0
                ? (Number(goal.actualValue) / Number(goal.targetValue)) * 100
                : 0;
              const latestCheckin = goal.checkIns?.[0];

              return (
                <div key={goal.id} className="rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900">{goal.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{goal.thrustArea} • {goal.uomType}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700">{goal.weightage}%</span>
                      {getStatusBadge(goal.status)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-medium text-slate-700">
                        {goal.actualValue} / {goal.targetValue}
                        {latestCheckin && (
                          <span className="ml-2 text-xs text-slate-400">
                            (Score: {Number(latestCheckin.computedScore).toFixed(2)})
                          </span>
                        )}
                      </span>
                    </div>
                    <Progress value={Math.min(progress, 100)} />
                  </div>
                  {latestCheckin?.managerComment && (
                    <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                      <span className="font-medium">Manager:</span> {latestCheckin.managerComment}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Goal Status Overview</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Goal Distribution</h3>
            <div className="space-y-3">
              {['Product Innovation', 'Operational Excellence', 'Industrial Growth'].map((area) => {
                const count = goals.filter((g: any) => g.thrustArea === area).length;
                const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                return (
                  <div key={area}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{area}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                    <Progress value={pct} size="sm" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={20} className="text-amber-400" />
              <h3 className="font-semibold">Next Check-in</h3>
            </div>
            <p className="text-3xl font-bold">Q2 2026</p>
            <p className="text-sm text-slate-400 mt-1">Window: October 2026</p>
            <a href="/check-in" className="mt-4 inline-flex items-center text-sm font-medium text-amber-400 hover:text-amber-300">
              Start Check-in <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      <ChatWidget />
    </div>
  );
}
