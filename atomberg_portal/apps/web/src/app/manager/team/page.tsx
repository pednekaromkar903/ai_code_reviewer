'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import {
  Users, CheckCircle2, XCircle, MessageSquare,
  ArrowRight, TrendingUp
} from 'lucide-react';

export default function TeamPage() {
  const [teamData, setTeamData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [approvalComment, setApprovalComment] = useState('');

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await api.get('/dashboard/manager');
      setTeamData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (goalId: string) => {
    try {
      await api.put(`/goals/${goalId}/approve`, { comment: approvalComment });
      setApprovalComment('');
      fetchTeam();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (goalId: string) => {
    try {
      await api.put(`/goals/${goalId}/reject`, { comment: approvalComment });
      setApprovalComment('');
      fetchTeam();
    } catch (err) {
      console.error(err);
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

  const stats = teamData?.stats || [];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Team Performance</h1>
            <p className="text-slate-500 mt-1">{teamData?.teamSize || 0} direct reports • Q2 2026</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="primary">Manager View</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-100"><Users size={20} className="text-blue-600" /></div>
              <div>
                <p className="text-sm text-slate-500">Team Size</p>
                <p className="text-2xl font-bold">{teamData?.teamSize}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-emerald-100"><TrendingUp size={20} className="text-emerald-600" /></div>
              <div>
                <p className="text-sm text-slate-500">Avg Score</p>
                <p className="text-2xl font-bold">
                  {(stats.reduce((acc: number, m: any) => acc + m.avgScore, 0) / (stats.length || 1)).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-amber-100"><MessageSquare size={20} className="text-amber-600" /></div>
              <div>
                <p className="text-sm text-slate-500">Pending Check-ins</p>
                <p className="text-2xl font-bold">
                  {stats.reduce((acc: number, m: any) => acc + m.pendingCheckins, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Team Members</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Goals</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Avg Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {stats.map((member: any) => (
                  <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900">{member.name}</p>
                        <p className="text-sm text-slate-500">{member.department}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">{member.totalGoals}</td>
                    <td className="px-6 py-4">
                      <div className="w-32">
                        <Progress value={member.completionRate} />
                        <span className="text-xs text-slate-500 mt-1">{member.completionRate.toFixed(0)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">
                      {member.avgScore.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
                        className="text-sm font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1"
                      >
                        {selectedMember?.id === member.id ? 'Hide' : 'Review'} <ArrowRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedMember && (
          <div className="card space-y-4">
            <h3 className="font-semibold text-slate-900">
              {selectedMember.name}'s Goals — Approval Review
            </h3>
            <div className="space-y-3">
              {selectedMember.goals.map((goal: any) => (
                <div key={goal.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-slate-900">{goal.title}</h4>
                      <p className="text-sm text-slate-500">Target: {goal.target} • Weight: {goal.weightage}%</p>
                    </div>
                    <Badge variant={goal.status === 'PENDING' ? 'primary' : goal.status === 'COMPLETED' ? 'success' : 'info'}>
                      {goal.status}
                    </Badge>
                  </div>
                  {goal.status === 'PENDING' && (
                    <div className="mt-4 flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Approval comment (optional)"
                        className="input flex-1 text-sm"
                        value={approvalComment}
                        onChange={(e) => setApprovalComment(e.target.value)}
                      />
                      <button
                        onClick={() => handleApprove(goal.id)}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                      >
                        <CheckCircle2 size={16} /> Approve
                      </button>
                      <button
                        onClick={() => handleReject(goal.id)}
                        className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                      >
                        <XCircle size={16} /> Reject
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
