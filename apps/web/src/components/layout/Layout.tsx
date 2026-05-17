'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { AuthProvider } from '@/components/providers/AuthProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { token, checkAuth } = useAuthStore();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Sidebar collapsed={isSidebarCollapsed} setCollapsed={setIsSidebarCollapsed} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 animate-fade-in">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
