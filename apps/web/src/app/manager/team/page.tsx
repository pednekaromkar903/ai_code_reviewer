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
import { toast } from 'sonner';

export default function TeamPage() {
  const [teamData, setTeamData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [approvalComment, setApprovalComment] = useState('');
  const [edits, setEdits] = useState<Record<string, { target?: number, weightage?: number }>>({});

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

  const handleEdit = (goalId: string, field: string, value: string) => {
    setEdits(prev => ({
      ...prev,
      [goalId]: {
        ...prev[goalId],
        [field]: Number(value)
      }
    }));
  };

  const handleApprove = async (goalId: string) => {
    try {
      const editData = edits[goalId] || {};
      await api.put(`/goals/${goalId}/approve`, { 
        comment: approvalComment,
        targetValue: editData.target,
        weightage: editData.weightage
      });
      toast.success('Goal approved successfully');
      setApprovalComment('');
      // Clear edits for this goal
      const newEdits = { ...edits };
      delete newEdits[goalId];
      setEdits(newEdits);
      fetchTeam();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Approval failed');
    }
  };

  const handleReject = async (goalId: string) => {
    if (!approvalComment) {
      toast.error('Feedback comment is required when returning for rework.');
      return;
    }
    try {
      await api.put(`/goals/${goalId}/reject`, { comment: approvalComment });
      toast.info('Goal returned for rework');
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
          <div className="card space-y-4 animate-in slide-in-from-top-4 duration-300">
            <h3 className="font-semibold text-slate-900">
              {selectedMember.name}'s Goals — Approval Review
            </h3>
            <div className="space-y-3">
              {selectedMember.goals.map((goal: any) => (
                <div key={goal.id} className="rounded-lg border border-slate-200 p-4 bg-slate-50/30">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">{goal.title}</h4>
                      {goal.status === 'PENDING' ? (
                        <div className="flex gap-4 mt-2">
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Target Value</label>
                            <input 
                              type="number" 
                              className="input py-1 px-2 text-xs" 
                              defaultValue={goal.target}
                              onChange={(e) => handleEdit(goal.id, 'target', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Weightage (%)</label>
                            <input 
                              type="number" 
                              className="input py-1 px-2 text-xs" 
                              defaultValue={goal.weightage}
                              onChange={(e) => handleEdit(goal.id, 'weightage', e.target.value)}
                            />
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-slate-500">Target: {goal.target} • Weight: {goal.weightage}%</p>
                      )}
                    </div>
                    <Badge variant={goal.status === 'PENDING' ? 'primary' : goal.status === 'COMPLETED' ? 'success' : 'info'}>
                      {goal.status}
                    </Badge>
                  </div>
                  {goal.status === 'PENDING' && (
                    <div className="mt-4 flex flex-col gap-3">
                      <textarea
                        placeholder="Feedback comment (required for rework)"
                        className="input text-sm min-h-[80px]"
                        value={approvalComment}
                        onChange={(e) => setApprovalComment(e.target.value)}
                      />
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => handleReject(goal.id)}
                          className="inline-flex items-center gap-1 rounded-lg bg-red-50 text-red-600 px-3 py-2 text-sm font-medium hover:bg-red-100"
                        >
                          <XCircle size={16} /> Return for Rework
                        </button>
                        <button
                          onClick={() => handleApprove(goal.id)}
                          className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                        >
                          <CheckCircle2 size={16} /> Approve Changes
                        </button>
                      </div>
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
