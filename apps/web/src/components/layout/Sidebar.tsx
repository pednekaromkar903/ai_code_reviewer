'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/hooks/useAuth';
import { AtombergLogo } from '@/components/brand/AtombergLogo';
import {
  LayoutDashboard, Target, Users, FileText,
  LogOut, Menu, X, MessageSquare,
  BarChart3, Shield, CheckCircle, Sparkles, Database, Table2,
  Calendar, Lightbulb, Zap, Mail
} from 'lucide-react';

interface SidebarProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed: propCollapsed, setCollapsed: propSetCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();
  const [localCollapsed, setLocalCollapsed] = useState(false);

  const collapsed = propCollapsed !== undefined ? propCollapsed : localCollapsed;
  const setCollapsed = propSetCollapsed || setLocalCollapsed;

  const role = user?.role;

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/goals', label: 'Goals', icon: Target, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/goals/new', label: 'Create Goal', icon: CheckCircle, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/check-in', label: 'Check-in', icon: CheckCircle, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/manager/team', label: 'Team', icon: Users, roles: ['MANAGER', 'ADMIN'] },
    { href: '/manager/checkins', label: 'Check-ins', icon: MessageSquare, roles: ['MANAGER', 'ADMIN'] },
    { href: '/reports', label: 'Reports', icon: FileText, roles: ['MANAGER', 'ADMIN'] },
    { href: '/calendar', label: 'Calendar', icon: Calendar, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/chat', label: 'Intelligence', icon: Sparkles, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/email/dashboard', label: 'Email Intelligence', icon: Mail, roles: ['MANAGER', 'ADMIN'] },
    { href: '/admin/shared-goals', label: 'Shared Goals', icon: Users, roles: ['MANAGER', 'ADMIN'] },
    { href: '/innovation', label: 'Innovation Hub', icon: Lightbulb, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/tech-radar', label: 'Tech Radar', icon: Zap, roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
    { href: '/connect', label: 'DB Connect', icon: Database, roles: ['MANAGER', 'ADMIN'] },
    { href: '/intelligence/goals', label: 'HR Goals', icon: Target, roles: ['MANAGER', 'ADMIN'] },
    { href: '/schema', label: 'Schema', icon: Table2, roles: ['MANAGER', 'ADMIN'] },
    { href: '/admin/cycles', label: 'Cycles', icon: BarChart3, roles: ['ADMIN'] },
    { href: '/admin/audit', label: 'Audit Trail', icon: Shield, roles: ['ADMIN'] },
  ];

  const filteredNav = navItems.filter(item => item.roles.includes(role || 'EMPLOYEE'));

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setCollapsed(true)} 
        />
      )}
      <aside className={`fixed md:sticky inset-y-0 left-0 z-50 md:z-40 h-screen flex flex-col bg-slate-900 text-white border-r border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
        collapsed ? '-translate-x-full w-64 md:translate-x-0 md:w-[70px]' : 'translate-x-0 w-64'
      }`}>
      <div className={`p-4 flex ${collapsed ? 'flex-col gap-4 items-center' : 'items-center justify-between gap-3'} min-h-[80px]`}>
        <div className="flex items-center overflow-hidden">
          <AtombergLogo size="sm" showText={!collapsed} variant="light" />
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 shrink-0 hidden md:block"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-2 overflow-y-auto custom-scrollbar">
        {filteredNav.map((item) => {
          const isActive = pathname === item.href || (item.href === '/email/dashboard' && pathname.startsWith('/email/'));
          return (
            <React.Fragment key={item.href}>
              <Link
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-lg px-3 py-2.5 text-sm font-medium transition-all group relative ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-white/10'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 w-1 h-6 bg-atomberg-gold rounded-r-full" />
                )}
                <item.icon size={20} className={`${isActive ? 'text-atomberg-gold' : 'group-hover:text-white'} transition-colors`} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
              
              {item.href === '/email/dashboard' && !collapsed && pathname.startsWith('/email/') && (
                <div className="ml-9 mt-1 space-y-1 animate-in slide-in-from-left-2 duration-200">
                  <Link href="/email/connect" className={`block py-1.5 text-xs ${pathname === '/email/connect' ? 'text-atomberg-gold font-bold' : 'text-slate-500 hover:text-slate-300'}`}>Connect</Link>
                  <Link href="/email/inbox" className={`block py-1.5 text-xs ${pathname === '/email/inbox' ? 'text-atomberg-gold font-bold' : 'text-slate-500 hover:text-slate-300'}`}>Inbox</Link>
                  <Link href="/email/dashboard" className={`block py-1.5 text-xs ${pathname === '/email/dashboard' ? 'text-atomberg-gold font-bold' : 'text-slate-500 hover:text-slate-300'}`}>Dashboard</Link>
                  <Link href="/email/reports" className={`block py-1.5 text-xs ${pathname === '/email/reports' ? 'text-atomberg-gold font-bold' : 'text-slate-500 hover:text-slate-300'}`}>Reports</Link>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        {!collapsed && user && (
          <div className="mb-4 px-3 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-400 truncate uppercase tracking-wider font-semibold">{user.role}</p>
          </div>
        )}
        <button
          onClick={logout}
          title={collapsed ? 'Logout' : undefined}
          className={`flex w-full items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-600/20 hover:text-red-400 transition-colors group`}
        >
          <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
    </>
  );
}
