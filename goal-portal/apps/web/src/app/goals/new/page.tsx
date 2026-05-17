"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/useAuth";
import axios from "axios";
import { Layout } from "@/components/layout/Layout";

export default function NewGoalPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thrustArea, setThrustArea] = useState("Product Innovation");
  const [uomType, setUomType] = useState("MIN");
  const [targetValue, setTargetValue] = useState("");
  const [weightage, setWeightage] = useState(10);
  const [totalWeight, setTotalWeight] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  const [error, setError] = useState("");
  
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

  useEffect(() => {
    const fetchCurrentStats = async () => {
      if (!token) return;
      const res = await axios.get(`${API_URL}/goals`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const goals = res.data;
      setGoalCount(goals.length);
      setTotalWeight(goals.reduce((acc: number, g: any) => acc + g.weightage, 0));
    };
    fetchCurrentStats();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (goalCount >= 8) {
      setError("Maximum 8 goals allowed.");
      return;
    }
    if (totalWeight + weightage > 100) {
      setError(`Total weightage (${totalWeight + weightage}%) exceeds 100%.`);
      return;
    }
    if (weightage < 10) {
      setError("Minimum weightage is 10%.");
      return;
    }

    try {
      await axios.post(`${API_URL}/goals`, {
        title, description, thrustArea, uomType, targetValue: Number(targetValue), weightage, categoryType: "RND"
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create goal");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Create New Goal</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Goal Title</label>
              <input type="text" required className="mt-1 block w-full rounded-md border p-2" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Description</label>
              <textarea className="mt-1 block w-full rounded-md border p-2" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Thrust Area</label>
                <select className="mt-1 block w-full rounded-md border p-2" value={thrustArea} onChange={e => setThrustArea(e.target.value)}>
                  <option>Product Innovation</option>
                  <option>Operational Excellence</option>
                  <option>Industrial Growth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">UoM Type</label>
                <select className="mt-1 block w-full rounded-md border p-2" value={uomType} onChange={e => setUomType(e.target.value)}>
                  <option value="MIN">MIN (Higher is Better)</option>
                  <option value="MAX">MAX (Lower is Better)</option>
                  <option value="TIMELINE">TIMELINE</option>
                  <option value="ZERO">ZERO</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Target Value</label>
                <input type="number" required className="mt-1 block w-full rounded-md border p-2" value={targetValue} onChange={e => setTargetValue(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Weightage (%)</label>
                <input type="number" min="10" max="100" required className="mt-1 block w-full rounded-md border p-2" value={weightage} onChange={e => setWeightage(Number(e.target.value))} />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-md text-sm text-slate-600">
            <p>Current Goals: {goalCount}/8</p>
            <p>Total Weightage: {totalWeight + weightage}% / 100%</p>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-4">
            <button type="button" onClick={() => router.back()} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800">Create Goal</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
