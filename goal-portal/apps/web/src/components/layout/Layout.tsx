"use client";

import { LogOut, LayoutDashboard, Target, Users, FileText, Settings } from "lucide-react";
import { useAuthStore } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Layout({ children }: { children: React.ReactNode }) {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tight">Atomberg Portal</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/goals" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800">
            <Target size={18} /> Goals
          </Link>
          <Link href="/manager/team" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800">
            <Users size={18} /> Team
          </Link>
          <Link href="/reports" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800">
            <FileText size={18} /> Reports
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-red-600">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
