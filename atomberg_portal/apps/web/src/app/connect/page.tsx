'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Database, CheckCircle2, Loader2, Server } from 'lucide-react';

export default function ConnectPage() {
  const [form, setForm] = useState({
    name: 'Atomberg Legacy DB',
    host: 'localhost',
    port: 5432,
    database: 'goal_portal',
    username: 'postgres',
    password: 'password123',
    dbType: 'postgresql'
  });
  const [testing, setTesting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [active, setActive] = useState<any>(null);

  useEffect(() => {
    api.get('/intelligence/connect').then((r) => setActive(r.data.connection)).catch(() => {});
  }, []);

  const test = async () => {
    setTesting(true);
    setMessage('');
    try {
      const res = await api.post('/intelligence/connect/test', form);
      setMessage(res.data.message || 'Connection successful');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Connection failed');
    } finally {
      setTesting(false);
    }
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.post('/intelligence/connect/save', form);
      setMessage('Connection saved and activated.');
      const r = await api.get('/intelligence/connect');
      setActive(r.data.connection);
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Database size={24} /> Database Connector
          </h1>
          <p className="text-slate-500 mt-1">Connect to Atomberg legacy systems (SAP ERP, manufacturing DB, sales CRM)</p>
        </div>

        {active && (
          <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3">
            <CheckCircle2 className="text-emerald-600" size={20} />
            <div>
              <p className="font-medium text-emerald-800">Active: {active.name}</p>
              <p className="text-sm text-emerald-600">{active.host}:{active.port}/{active.database} (read-only)</p>
            </div>
          </div>
        )}

        <div className="card space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="label">Connection Name</label>
              <input className="input mt-1" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="label">DB Type</label>
              <select className="input mt-1" value={form.dbType} onChange={(e) => setForm({ ...form, dbType: e.target.value })}>
                <option value="postgresql">PostgreSQL</option>
                <option value="mysql">MySQL</option>
                <option value="sqlserver">SQL Server</option>
                <option value="sap_hana">SAP HANA</option>
              </select>
            </div>
            <div>
              <label className="label">Port</label>
              <input type="number" className="input mt-1" value={form.port} onChange={(e) => setForm({ ...form, port: Number(e.target.value) })} />
            </div>
            <div>
              <label className="label">Host</label>
              <input className="input mt-1" value={form.host} onChange={(e) => setForm({ ...form, host: e.target.value })} />
            </div>
            <div>
              <label className="label">Database</label>
              <input className="input mt-1" value={form.database} onChange={(e) => setForm({ ...form, database: e.target.value })} />
            </div>
            <div>
              <label className="label">Username</label>
              <input className="input mt-1" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input mt-1" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
          </div>

          {message && <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">{message}</p>}

          <div className="flex gap-3">
            <button type="button" onClick={test} disabled={testing} className="btn-secondary flex-1">
              {testing ? <Loader2 className="animate-spin mx-auto" size={18} /> : <><Server size={16} className="mr-2 inline" /> Test Connection</>}
            </button>
            <button type="button" onClick={save} disabled={saving} className="btn-primary flex-1">
              {saving ? 'Saving...' : 'Save & Activate'}
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center">Read-only access • 10s query timeout • RBAC enforced</p>
      </div>
    </Layout>
  );
}
