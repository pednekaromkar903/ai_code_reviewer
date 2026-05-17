'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { Layout } from '@/components/layout/Layout';
import { Download, FileSpreadsheet, ArrowRight } from 'lucide-react';

export default function ReportsPage() {
  const [downloading, setDownloading] = useState(false);

  const downloadCSV = async () => {
    setDownloading(true);
    try {
      const res = await api.get('/reports/achievement', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'atomberg-achievement-report.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports & Exports</h1>
          <p className="text-slate-500 mt-1">Download achievement data and audit trails</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-100">
                <FileSpreadsheet size={24} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Achievement Report</h3>
                <p className="text-sm text-slate-500">Planned vs Actual for all employees</p>
              </div>
            </div>
            <button
              onClick={downloadCSV}
              disabled={downloading}
              className="btn-primary w-full"
            >
              {downloading ? 'Generating...' : <><Download size={16} className="mr-2" /> Download CSV</>}
            </button>
          </div>

          <div className="card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-100">
                <FileSpreadsheet size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Audit Trail Export</h3>
                <p className="text-sm text-slate-500">All post-approval changes (IPO-ready)</p>
              </div>
            </div>
            <button
              onClick={() => alert('Audit export coming soon!')}
              className="btn-secondary w-full"
            >
              <ArrowRight size={16} className="mr-2" /> View Audit Logs
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
