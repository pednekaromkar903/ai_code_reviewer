'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { 
  FileText, Plus, Download, Calendar, 
  ArrowRight, ShieldCheck, TrendingUp, Info
} from 'lucide-react';
import { api } from '@/lib/api';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface Report {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  totalEmails: number;
  complaints: number;
  byCategory: any;
  bySentiment: any;
  trends: any;
  insights: string;
  generatedAt: string;
}

export default function EmailReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  const fetchReports = async () => {
    try {
      const res = await api.get('/email/reports');
      setReports(res.data.reports);
    } catch (error) {
      toast.error('Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleGenerate = async (period: 'WEEKLY' | 'MONTHLY') => {
    setGenerating(true);
    try {
      await api.post('/email/reports', { period });
      toast.success(`${period} report generated`);
      fetchReports();
    } catch (error) {
      toast.error('Failed to generate report');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="text-atomberg-gold" /> Intelligence Reports
            </h1>
            <p className="text-slate-500 text-sm">Automated complaint summaries and strategic recommendations.</p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => handleGenerate('WEEKLY')}
              disabled={generating}
              className="btn-secondary gap-2"
            >
              <Plus size={16} /> Weekly Report
            </button>
            <button 
              onClick={() => handleGenerate('MONTHLY')}
              disabled={generating}
              className="btn-atomberg gap-2"
            >
              <Plus size={16} /> Monthly Report
            </button>
          </div>
        </div>

        {generating && (
          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl flex items-center gap-4 animate-pulse">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
            <p className="text-indigo-900 font-bold">Generating Intelligence Report... Analysis in progress.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading && (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="card h-64 bg-slate-50 animate-pulse rounded-2xl border border-slate-200" />
            ))
          )}
          {!loading && reports.map((report) => (
            <div key={report.id} className="card p-0 overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-500">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{report.period} Quality Report</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {format(new Date(report.startDate), 'MMM d')} - {format(new Date(report.endDate), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400">
                  <Download size={18} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Emails</p>
                    <p className="text-xl font-black text-slate-900">{report.totalEmails}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Complaints</p>
                    <p className="text-xl font-black text-red-600">{report.complaints}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Top Issue</p>
                    <p className="text-xs font-bold text-indigo-600 mt-1">{report.trends.topIssue?.replace('_', ' ')}</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 p-4 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                    <ShieldCheck size={12} className="text-emerald-500" /> AI Strategic Insights
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed italic">"{report.insights}"</p>
                </div>

                <button className="w-full py-2.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors flex items-center justify-center gap-2">
                  View Full Report Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}

          {reports.length === 0 && !loading && (
            <div className="col-span-2 py-20 text-center border-2 border-dashed border-slate-200 rounded-3xl">
              <Info size={48} className="text-slate-200 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-400">No Reports Found</h3>
              <p className="text-slate-400 text-sm">Generate your first Weekly or Monthly intelligence report above.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
