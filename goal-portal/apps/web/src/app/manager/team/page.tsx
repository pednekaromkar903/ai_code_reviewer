"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/hooks/useAuth";
import axios from "axios";
import { Layout } from "@/components/layout/Layout";

export default function TeamPage() {
  const [teamStats, setTeamStats] = useState([]);
  const token = useAuthStore((state) => state.token);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

  useEffect(() => {
    const fetchTeam = async () => {
      if (!token) return;
      const res = await axios.get(`${API_URL}/dashboard/manager`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTeamStats(res.data);
    };
    fetchTeam();
  }, [token]);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">My Team Performance</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Total Goals</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Avg Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {teamStats.map((member: any) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{member.totalGoals}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{member.completionRate.toFixed(1)}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{member.avgScore.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">Review Goals</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
