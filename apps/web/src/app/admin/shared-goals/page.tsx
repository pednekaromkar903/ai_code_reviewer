'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Users, Send, CheckCircle2, AlertCircle, Search } from 'lucide-react';
import { toast } from 'sonner';

export default function SharedGoalsPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [pushing, setPushing] = useState(false);

  const [form, setForm] = useState({
    title: '',
    description: '',
    thrustArea: 'Product Innovation',
    uomType: 'MIN',
    targetValue: '',
    categoryType: 'RND'
  });

  useEffect(() => {
    api.get('/sap/employees').then((res) => {
      setEmployees(res.data.employees);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handlePush = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIds.length === 0) {
      toast.error('Please select at least one recipient.');
      return;
    }
    setPushing(true);
    try {
      await api.post('/goals/shared', {
        ...form,
        targetValue: Number(form.targetValue),
        recipientIds: selectedIds
      });
      toast.success(`Successfully pushed goal to ${selectedIds.length} employees!`);
      setForm({
        title: '',
        description: '',
        thrustArea: 'Product Innovation',
        uomType: 'MIN',
        targetValue: '',
        categoryType: 'RND'
      });
      setSelectedIds([]);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to push shared goal');
    } finally {
      setPushing(false);
    }
  };

  const filteredEmployees = employees.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users size={24} className="text-indigo-600" /> Push Shared Goals
          </h1>
          <p className="text-slate-500 mt-1">Admin tool to broadcast common KPIs to multiple employees at once.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Goal Definition */}
          <div className="card space-y-6">
            <h3 className="font-semibold text-slate-900 border-b pb-2">1. Define Shared Goal</h3>
            <form onSubmit={handlePush} className="space-y-4">
              <div>
                <label className="label">Goal Title</label>
                <input 
                  className="input mt-1" 
                  required
                  placeholder="e.g. Total Revenue Growth"
                  value={form.title}
                  onChange={e => setForm({...form, title: e.target.value})}
                />
              </div>
              <div>
                <label className="label">Target Value</label>
                <input 
                  type="number"
                  className="input mt-1" 
                  required
                  placeholder="e.g. 1000000"
                  value={form.targetValue}
                  onChange={e => setForm({...form, targetValue: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Thrust Area</label>
                  <select className="input mt-1" value={form.thrustArea} onChange={e => setForm({...form, thrustArea: e.target.value})}>
                    <option>Product Innovation</option>
                    <option>Operational Excellence</option>
                    <option>Industrial Growth</option>
                  </select>
                </div>
                <div>
                  <label className="label">UoM</label>
                  <select className="input mt-1" value={form.uomType} onChange={e => setForm({...form, uomType: e.target.value})}>
                    <option value="MIN">MIN</option>
                    <option value="MAX">MAX</option>
                    <option value="TIMELINE">TIMELINE</option>
                    <option value="ZERO">ZERO</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 border-t">
                <button 
                  type="submit" 
                  disabled={pushing}
                  className="btn-primary w-full gap-2 py-3"
                >
                  {pushing ? 'Broadcasting...' : <><Send size={18} /> Push to Selected Employees</>}
                </button>
                <p className="text-[10px] text-slate-400 mt-2 text-center">
                  Recipients will receive this with a default 10% weightage.
                </p>
              </div>
            </form>
          </div>

          {/* Recipient Selection */}
          <div className="card flex flex-col h-[600px]">
            <div className="flex items-center justify-between mb-4 border-b pb-2">
              <h3 className="font-semibold text-slate-900">2. Select Recipients ({selectedIds.length})</h3>
              <button 
                onClick={() => setSelectedIds(employees.map(e => e.pernr))}
                className="text-xs text-indigo-600 font-medium hover:underline"
              >
                Select All
              </button>
            </div>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text"
                placeholder="Search by name or department..."
                className="input pl-10 py-2 text-sm"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar pr-2">
              {loading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-1/3 bg-slate-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                ))
              ) : (
                filteredEmployees.map(emp => (
                  <div 
                    key={emp.pernr}
                    onClick={() => toggleSelect(emp.pernr)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedIds.includes(emp.pernr) 
                        ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600' 
                        : 'border-slate-100 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${selectedIds.includes(emp.pernr) ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{emp.name}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">{emp.department} • {emp.role}</p>
                      </div>
                    </div>
                    {selectedIds.includes(emp.pernr) && <CheckCircle2 className="text-indigo-600" size={18} />}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
