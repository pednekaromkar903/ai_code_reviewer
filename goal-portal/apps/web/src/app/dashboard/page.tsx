"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/hooks/useAuth";
import axios from "axios";
import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { Layout } from "@/components/layout/Layout";

export default function DashboardPage() {
  const [goals, setGoals] = useState([]);
  const token = useAuthStore((state) => state.token);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

  useEffect(() => {
    const fetchGoals = async () => {
      if (!token) return;
      const res = await axios.get(`${API_URL}/goals`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setGoals(res.data);
    };
    fetchGoals();
  }, [token]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">My Dashboard</h1>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Create Goal
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Total Goals" value={goals.length.toString()} />
          <Card title="Avg Score" value="0.85" />
          <Card title="Next Deadline" value="30 Jun 2026" />
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-slate-900">Current Goals</h2>
          <div className="mt-4 space-y-4">
            {goals.map((goal: any) => (
              <div key={goal.id} className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-800">{goal.title}</h3>
                  <span className="text-sm font-semibold text-indigo-600">{goal.weightage}%</span>
                </div>
                <div className="mt-2">
                  <Progress value={goal.actualValue / goal.targetValue * 100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatWidget />
    </Layout>
  );
}
