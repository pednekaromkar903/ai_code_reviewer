'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import {
  LayoutDashboard, Target, Users, FileText,
  LogOut, ChevronLeft, ChevronRight, MessageSquare,
  BarChart3, Shield, CheckCircle, Sparkles, Database, Table2
} from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();
  const [collapsed, setCollapsed] = useState(false);

  const role = user?.role;

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/goals', label: 'Goals', icon: Target, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/goals/new', label: 'Create Goal', icon: CheckCircle, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/check-in', label: 'Check-in', icon: CheckCircle, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/manager/team', label: 'Team', icon: Users, roles: ['MANAGER', 'ADMIN'] },
    { href: '/manager/checkins', label: 'Check-ins', icon: MessageSquare, roles: ['MANAGER', 'ADMIN'] },
    { href: '/reports', label: 'Reports', icon: FileText, roles: ['MANAGER', 'ADMIN'] },
    { href: '/chat', label: 'Intelligence', icon: Sparkles, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/connect', label: 'DB Connect', icon: Database, roles: ['MANAGER', 'ADMIN'] },
    { href: '/intelligence/goals', label: 'HR Goals', icon: Target, roles: ['MANAGER', 'ADMIN'] },
    { href: '/schema', label: 'Schema', icon: Table2, roles: ['MANAGER', 'ADMIN'] },
    { href: '/admin/cycles', label: 'Cycles', icon: BarChart3, roles: ['ADMIN'] },
    { href: '/admin/audit', label: 'Audit', icon: Shield, roles: ['ADMIN'] },
  ];

  const filteredNav = navItems.filter(item => item.roles.includes(role || 'EMPLOYEE'));

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-slate-900 text-white flex flex-col transition-all duration-300`}>
      <div className="p-6 flex items-center justify-between">
        {!collapsed && (
          <div>
            <h2 className="text-xl font-bold tracking-tight">Atomberg</h2>
            <p className="text-xs text-slate-400 mt-1">Goal Portal</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {filteredNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        {!collapsed && user && (
          <div className="mb-4 px-3">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-slate-400">{user.role} • {user.department}</p>
          </div>
        )}
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-600 hover:text-white transition-colors"
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
