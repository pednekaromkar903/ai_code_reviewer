'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { Sidebar } from '@/components/layout/Sidebar';
import { AuthProvider } from '@/components/providers/AuthProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { token, checkAuth } = useAuthStore();

  useEffect(() => {
    if (!checkAuth() && pathname !== '/login') {
      router.push('/login');
    }
  }, [token, pathname, router, checkAuth]);

  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
