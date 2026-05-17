'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/hooks/useAuth';
import { api } from '@/lib/api';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);

  useEffect(() => {
    if (!token) return;
    api.get('/auth/me')
      .then((res) => {
        const u = res.data.user;
        useAuthStore.setState({
          user: {
            id: u.id,
            name: u.name,
            email: u.email,
            role: u.role,
            department: u.department?.name || u.department,
            manager: u.manager?.name || null
          }
        });
      })
      .catch(() => {
        localStorage.removeItem('token');
        useAuthStore.setState({ token: null, user: null });
      });
  }, [token]);

  return <>{children}</>;
}
