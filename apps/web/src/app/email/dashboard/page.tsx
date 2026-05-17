'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { 
  BarChart3, TrendingUp, AlertCircle, CheckCircle2, 
  Mail, MessageSquare, PieChart, Activity, Zap
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart as RePieChart, Pie, Cell, LineChart, Line, CartesianGrid 
} from 'recharts';
import { api } from '@/lib/api';
import { toast } from 'sonner';

const CHART_COLORS = ['#fdb913', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function EmailDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/email/dashboard');
        setStats(res.data.stats);
      } catch (error) {
        toast.error('Failed to load dashboard stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return (
    <Layout>
      <div className="space-y-8 animate-pulse">
        <div>
          <div className="h-8 bg-slate-200 rounded w-64 mb-2" />
          <div className="h-4 bg-slate-100 rounded w-96" />
        </div>
        <div className="h-20 bg-red-50 rounded-2xl border border-red-100" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-slate-100 rounded-xl" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-80 bg-slate-100 rounded-xl" />
          <div className="h-80 bg-slate-100 rounded-xl" />
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="text-atomberg-gold" /> Complaint Analytics
          </h1>
          <p className="text-slate-500 text-sm">Real-time sentiment and quality tracking from customer communications.</p>
        </div>

        {/* Top Issue Alert */}
        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm animate-pulse">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 shrink-0 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-red-900">Top Issue Alert: Motor Noise</p>
              <p className="text-xs text-red-700">Motor noise complaints are up 35% this week. Recommend immediate R&D review.</p>
            </div>
          </div>
          <button className="text-xs font-bold text-red-600 bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-sm whitespace-nowrap">
            Investigate Root Cause
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Emails (7d)</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900">{stats.totalEmails}</h3>
              <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                <TrendingUp size={12} /> +12%
              </span>
            </div>
          </div>
          <div className="card p-6 border-l-4 border-l-red-500">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Total Complaints</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900">{stats.totalComplaints}</h3>
              <span className="text-xs font-bold text-red-500 flex items-center gap-1">
                <TrendingUp size={12} /> +24%
              </span>
            </div>
          </div>
          <div className="card p-6 border-l-4 border-l-emerald-500">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Resolved</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900">{stats.resolvedComplaints}</h3>
              <CheckCircle2 size={24} className="text-emerald-500" />
            </div>
          </div>
          <div className="card p-6 border-l-4 border-l-atomberg-gold">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Escalation Rate</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900">{stats.escalationRate}%</h3>
              <Zap size={24} className="text-atomberg-gold" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Complaints by Category */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <PieChart size={18} className="text-indigo-500" /> Complaints by Category
              </h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.complaintsByCategory.map((c: any) => ({ name: c.category.replace('_', ' '), count: c._count }))}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sentiment Distribution */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Activity size={18} className="text-atomberg-gold" /> Sentiment Analysis
              </h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={stats.sentimentDistribution.map((s: any) => ({ name: s.sentiment, value: s._count }))}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stats.sentimentDistribution.map((_: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
