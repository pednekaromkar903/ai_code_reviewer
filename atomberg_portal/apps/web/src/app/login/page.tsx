'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { Zap, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { role: 'Admin', email: 'admin@atomberg.com', color: 'bg-purple-100 text-purple-700' },
    { role: 'Manager (Mfg)', email: 'manager1@atomberg.com', color: 'bg-blue-100 text-blue-700' },
    { role: 'Manager (B2B)', email: 'manager2@atomberg.com', color: 'bg-blue-100 text-blue-700' },
    { role: 'Employee', email: 'employee1@atomberg.com', color: 'bg-emerald-100 text-emerald-700' },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
            <Zap size={32} className="text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Atomberg Goal Portal</h1>
          <p className="mt-2 text-slate-400">AI-Powered Performance Management</p>
        </div>

        <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                required
                className="input mt-1"
                placeholder="you@atomberg.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="input pr-10"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in to Portal'}
            </button>
          </form>

          <div className="mt-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Demo Accounts</p>
            <div className="grid grid-cols-2 gap-2">
              {demoAccounts.map((acc) => (
                <button
                  key={acc.email}
                  onClick={() => { setEmail(acc.email); setPassword('password123'); }}
                  className={`rounded-lg px-3 py-2 text-xs font-medium text-left transition-colors hover:opacity-80 ${acc.color}`}
                >
                  <span className="block font-semibold">{acc.role}</span>
                  <span className="opacity-75">{acc.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Built for AtomQuest Hackathon 2026 • Atomberg Technologies
        </p>
      </div>
    </div>
  );
}
