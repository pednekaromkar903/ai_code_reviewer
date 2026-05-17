'use client';

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { 
  Search, Filter, ChevronDown, ChevronUp, User, 
  CheckCircle2, AlertTriangle, MessageSquare, Clock, 
  Trash2, Mail, BadgeCheck, Sparkles, UserPlus
} from 'lucide-react';
import { api } from '@/lib/api';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface CustomerEmail {
  id: string;
  sender: string;
  subject: string;
  body: string;
  receivedAt: string;
  category: string;
  sentiment: string;
  priority: string;
  isComplaint: boolean;
  isResolved: boolean;
  resolution?: string;
}

export default function EmailInboxPage() {
  const [emails, setEmails] = useState<CustomerEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [resolution, setResolution] = useState('');
  
  // Filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const res = await api.get('/email/emails', {
        params: {
          category: categoryFilter || undefined,
          sentiment: sentimentFilter || undefined,
          priority: priorityFilter || undefined
        }
      });
      setEmails(res.data.emails);
    } catch (error) {
      toast.error('Failed to load emails');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [categoryFilter, sentimentFilter, priorityFilter]);

  const handleResolve = async (id: string) => {
    if (!resolution.trim()) {
      toast.error('Please provide a resolution note');
      return;
    }
    try {
      await api.post(`/email/resolve/${id}`, { resolution });
      toast.success('Complaint resolved');
      setResolution('');
      setExpandedId(null);
      fetchEmails();
    } catch (error) {
      toast.error('Failed to resolve');
    }
  };

  const getSentimentColor = (s: string) => {
    switch(s) {
      case 'ANGRY': return 'bg-red-100 text-red-700 border-red-200';
      case 'FRUSTRATED': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'SATISFIED': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPriorityIcon = (p: string) => {
    switch(p) {
      case 'HIGH': return <AlertTriangle size={14} className="text-red-500" />;
      case 'MEDIUM': return <Clock size={14} className="text-orange-400" />;
      default: return <BadgeCheck size={14} className="text-emerald-500" />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="text-atomberg-gold" /> Intelligence Inbox
            </h1>
            <p className="text-slate-500 text-sm">AI-classified customer communications and complaints.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select className="input py-1.5 text-xs w-auto" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
              <option value="">All Categories</option>
              <option value="PRODUCT_QUALITY">Product Quality</option>
              <option value="NOISE_MOTOR">Motor Noise</option>
              <option value="DELIVERY">Delivery</option>
              <option value="INSTALLATION">Installation</option>
            </select>
            <select className="input py-1.5 text-xs w-auto" value={sentimentFilter} onChange={e => setSentimentFilter(e.target.value)}>
              <option value="">All Sentiments</option>
              <option value="ANGRY">Angry</option>
              <option value="FRUSTRATED">Frustrated</option>
              <option value="SATISFIED">Satisfied</option>
            </select>
            <select className="input py-1.5 text-xs w-auto" value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
              <option value="">All Priorities</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
        </div>

        <div className="card overflow-hidden">
          {loading ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Priority</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Intelligence</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {[1, 2, 3, 4, 5].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-16" /></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-200" />
                          <div className="h-4 bg-slate-200 rounded w-24" />
                        </div>
                      </td>
                      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-48" /></td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <div className="h-5 bg-slate-200 rounded-full w-20" />
                          <div className="h-5 bg-slate-200 rounded-full w-16" />
                        </div>
                      </td>
                      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-20" /></td>
                      <td className="px-6 py-4 flex justify-end"><div className="h-6 bg-slate-200 rounded-lg w-20" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Priority</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Intelligence</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {emails.map((email) => (
                    <React.Fragment key={email.id}>
                      <tr 
                        className={`hover:bg-slate-50 cursor-pointer transition-colors ${expandedId === email.id ? 'bg-slate-50' : ''}`}
                        onClick={() => setExpandedId(expandedId === email.id ? null : email.id)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            {getPriorityIcon(email.priority)}
                            <span className="text-[10px] font-bold text-slate-500">{email.priority}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                              {email.sender.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-sm font-medium text-slate-900">{email.sender.split('@')[0]}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-900 font-medium truncate max-w-[300px]">{email.subject}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-[10px] font-bold uppercase">
                              {email.category.replace('_', ' ')}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase ${getSentimentColor(email.sentiment)}`}>
                              {email.sentiment}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500">
                          {format(new Date(email.receivedAt), 'MMM d, HH:mm')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          {email.isResolved ? (
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-lg uppercase tracking-wider">Resolved</span>
                          ) : (
                            <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-lg uppercase tracking-wider">Unresolved</span>
                          )}
                        </td>
                      </tr>
                      
                      {expandedId === email.id && (
                        <tr>
                          <td colSpan={6} className="px-12 py-8 bg-slate-50/80 border-y border-slate-200 shadow-inner">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                              <div className="lg:col-span-2 space-y-4">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                  <div className="flex items-center justify-between mb-4 border-b pb-4">
                                    <h4 className="font-bold text-slate-900">Email Body</h4>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                      <Mail size={12} /> Received: {format(new Date(email.receivedAt), 'PPPP')}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{email.body}</p>
                                </div>
                                
                                {!email.isResolved && (
                                  <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700">Internal Resolution Note</label>
                                    <textarea 
                                      className="input min-h-[100px]" 
                                      placeholder="Explain how this issue was resolved..."
                                      value={resolution}
                                      onChange={e => setResolution(e.target.value)}
                                    />
                                    <div className="flex gap-3">
                                      <button 
                                        onClick={() => handleResolve(email.id)}
                                        className="btn-primary flex-1 py-3"
                                      >
                                        Mark as Resolved
                                      </button>
                                      <button className="btn-secondary flex-1 py-3 flex items-center justify-center gap-2">
                                        <UserPlus size={16} /> Assign to Manager
                                      </button>
                                    </div>
                                  </div>
                                )}
                                
                                {email.isResolved && (
                                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
                                    <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                                      <CheckCircle2 size={18} /> Resolution
                                    </h4>
                                    <p className="text-sm text-emerald-800 italic">"{email.resolution}"</p>
                                  </div>
                                )}
                              </div>

                              <div className="space-y-6">
                                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                                  <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Sparkles size={64} />
                                  </div>
                                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-indigo-200 uppercase tracking-widest">
                                    <Sparkles size={16} /> AI Intelligence Report
                                  </h4>
                                  <div className="space-y-4">
                                    <div className="space-y-1">
                                      <p className="text-[10px] font-bold text-indigo-300 uppercase">Category Detection</p>
                                      <p className="text-lg font-bold text-white">{email.category.replace('_', ' ')}</p>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-[10px] font-bold text-indigo-300 uppercase">Sentiment Analysis</p>
                                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getSentimentColor(email.sentiment)}`}>
                                        {email.sentiment}
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <p className="text-[10px] font-bold text-indigo-300 uppercase">Urgency Score</p>
                                      <p className="text-sm font-medium">{email.priority === 'HIGH' ? 'Critical Action Required' : 'Standard Queue'}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="card p-6 border-dashed bg-slate-50/50">
                                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <MessageSquare size={14} /> Suggested Action
                                  </h4>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    {email.category === 'NOISE_MOTOR' ? 'This appears to be a hardware defect. We recommend dispatching a field technician immediately.' : 
                                     email.category === 'DELIVERY' ? 'Apologize for delay and provide a ₹200 voucher to appease customer.' :
                                     'Standard support response recommended.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                  {emails.length === 0 && !loading && (
                    <tr>
                      <td colSpan={6} className="px-6 py-20 text-center">
                        <Mail size={48} className="text-slate-200 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-400">Your Inbox is Clear</h3>
                        <p className="text-slate-400 text-sm">No emails found matching your current filters.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

import React from 'react';
