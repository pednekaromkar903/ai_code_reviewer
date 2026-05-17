'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Mail, Shield, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { api } from '@/lib/api';
import { toast } from 'sonner';

export default function EmailConnectPage() {
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('GMAIL');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    try {
      // Mock OAuth delay
      await new Promise(r => setTimeout(r, 2000));
      
      await api.post('/email/connect', { email, provider });
      
      setIsConnected(true);
      toast.success(`Successfully connected ${email}`);
    } catch (error) {
      toast.error('Failed to connect email account');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-atomberg-gold/10 text-atomberg-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Email Intelligence</h1>
          <p className="text-slate-500 mt-2">Connect your Atomberg support or manager email to enable AI-powered complaint analytics.</p>
        </div>

        {isConnected ? (
          <div className="card bg-emerald-50 border-emerald-100 p-8 text-center animate-in zoom-in-95 duration-300">
            <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900">Account Connected!</h3>
            <p className="text-emerald-700 mt-2 mb-6">AI is now scanning your inbox for customer complaints and sentiment trends.</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/email/inbox'}
                className="btn-primary"
              >
                Go to Inbox
              </button>
              <button 
                onClick={() => setIsConnected(false)}
                className="btn-secondary"
              >
                Connect Another
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-8">
            <form onSubmit={handleConnect} className="space-y-6">
              <div>
                <label className="label mb-2">Support Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="input" 
                  placeholder="e.g. support@atomberg.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="label mb-2">Email Provider</label>
                <select 
                  className="input"
                  value={provider}
                  onChange={e => setProvider(e.target.value)}
                >
                  <option value="GMAIL">Google Workspace / Gmail</option>
                  <option value="OUTLOOK">Microsoft Outlook / 365</option>
                  <option value="IMAP">Custom IMAP Server</option>
                </select>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 flex gap-3 items-start border border-slate-100">
                <Shield size={20} className="text-slate-400 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  Atomberg Intelligence uses read-only OAuth scopes. We only process emails from customers to identify quality issues and sentiment trends. Your personal data is never stored.
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isConnecting}
                className="btn-atomberg w-full py-4 text-base font-bold shadow-xl shadow-atomberg-gold/20 flex items-center justify-center gap-2"
              >
                {isConnecting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Connecting to {provider}...
                  </>
                ) : (
                  <>
                    Authorize & Connect
                    <ExternalLink size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}
