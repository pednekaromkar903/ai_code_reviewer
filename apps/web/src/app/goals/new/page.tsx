'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { AlertCircle, CheckCircle2, ArrowLeft, Plus } from 'lucide-react';

export default function NewGoalPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thrustArea, setThrustArea] = useState('Product Innovation');
  const [uomType, setUomType] = useState('MIN');
  const [targetValue, setTargetValue] = useState('');
  const [weightage, setWeightage] = useState(10);
  const [categoryType, setCategoryType] = useState('RND');

  const [existingGoals, setExistingGoals] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchExistingGoals();
  }, []);

  const fetchExistingGoals = async () => {
    try {
      const res = await api.get('/goals');
      setExistingGoals(res.data.goals || []);
    } catch (err) {
      console.error(err);
    }
  };

  const totalWeight = existingGoals.reduce((acc, g) => acc + g.weightage, 0);
  const remainingWeight = 100 - totalWeight;
  const goalCount = existingGoals.length;

  const validate = () => {
    if (goalCount >= 8) return 'Maximum 8 goals allowed.';
    if (weightage < 10) return 'Minimum weightage per goal is 10%.';
    if (totalWeight + weightage > 100) return `Total weightage would be ${totalWeight + weightage}%. Must equal 100%.`;
    if (!title || title.length < 5) return 'Title must be at least 5 characters.';
    if (!targetValue || Number(targetValue) <= 0) return 'Target value must be greater than 0.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/goals', {
        title,
        description,
        thrustArea,
        uomType,
        targetValue: Number(targetValue),
        weightage,
        categoryType
      });
      setSuccess('Goal created successfully!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create goal');
    } finally {
      setIsSubmitting(false);
    }
  };

  const uomOptions = [
    { value: 'MIN', label: 'MIN', desc: 'Higher is Better (e.g., Revenue, % Savings)' },
    { value: 'MAX', label: 'MAX', desc: 'Lower is Better (e.g., Cost, TAT, Rejection %)' },
    { value: 'TIMELINE', label: 'TIMELINE', desc: 'Date-based Completion' },
    { value: 'ZERO', label: 'ZERO', desc: 'Zero = Success (e.g., Safety Incidents)' },
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => router.back()} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Create New Goal</h1>
            <p className="text-slate-500">Define your objective and measurement criteria</p>
          </div>
        </div>

        {/* Weightage Validator */}
        <div className="card mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Weightage Allocation</h3>
            <Badge variant={remainingWeight === 0 ? 'success' : remainingWeight < 0 ? 'danger' : 'warning'}>
              {remainingWeight === 0 ? '✅ Ready to Submit' : `${remainingWeight}% Remaining`}
            </Badge>
          </div>
          <Progress value={totalWeight} color={totalWeight > 100 ? 'bg-red-600' : totalWeight === 100 ? 'bg-emerald-600' : 'bg-indigo-600'} />
          <div className="flex justify-between text-sm mt-2">
            <span className="text-slate-500">Used: {totalWeight}%</span>
            <span className="text-slate-500">Goals: {goalCount}/8</span>
            <span className="text-slate-500">Remaining: {remainingWeight}%</span>
          </div>
          {existingGoals.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {existingGoals.map((g: any) => (
                <span key={g.id} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {g.title.substring(0, 20)}... ({g.weightage}%)
                </span>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {error && (
            <div className="rounded-lg bg-red-50 p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 mt-0.5 shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {success && (
            <div className="rounded-lg bg-emerald-50 p-4 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-sm text-emerald-700">{success}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="label">Goal Title</label>
              <input
                type="text"
                className="input mt-1"
                placeholder="e.g., Reduce Renesa motor BOM cost by 8%"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={200}
              />
              <p className="text-xs text-slate-400 mt-1">{title.length}/200 characters</p>
            </div>

            <div className="md:col-span-2">
              <label className="label">Description</label>
              <textarea
                className="input mt-1 min-h-[100px]"
                placeholder="Describe the goal, success criteria, and expected impact..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label className="label">Thrust Area</label>
              <select className="input mt-1" value={thrustArea} onChange={(e) => setThrustArea(e.target.value)}>
                <option>Product Innovation</option>
                <option>Operational Excellence</option>
                <option>Industrial Growth</option>
              </select>
            </div>

            <div>
              <label className="label">Category</label>
              <select className="input mt-1" value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
                <option value="RND">R&D</option>
                <option value="MANUFACTURING">Manufacturing</option>
                <option value="B2B">B2B Sales</option>
                <option value="RETAIL">Retail</option>
                <option value="D2C">D2C</option>
                <option value="PROCUREMENT">Procurement</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label">Unit of Measurement (UoM)</label>
              <div className="grid grid-cols-2 gap-3 mt-1">
                {uomOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setUomType(opt.value)}
                    className={`rounded-lg border-2 p-4 text-left transition-all ${
                      uomType === opt.value
                        ? 'border-slate-900 bg-slate-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-semibold text-slate-900">{opt.label}</span>
                    <span className="block text-xs text-slate-500 mt-1">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="label">Target Value</label>
              <input
                type="number"
                step="0.01"
                className="input mt-1"
                placeholder="e.g., 8"
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
              />
            </div>

            <div>
              <label className="label">Weightage (%)</label>
              <div className="flex items-center gap-4 mt-1">
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  className="flex-1"
                  value={weightage}
                  onChange={(e) => setWeightage(Number(e.target.value))}
                />
                <span className="w-16 text-center font-semibold text-slate-900 bg-slate-100 rounded-lg py-2">
                  {weightage}%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Min 10% per goal</p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button type="button" onClick={() => router.push('/dashboard')} className="btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Creating...' : <><Plus size={16} className="mr-2" /> Create Goal</>}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
