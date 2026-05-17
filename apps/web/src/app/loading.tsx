import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-slate-50/50">
      <div className="flex flex-col items-center gap-4 animate-in fade-in duration-300">
        <div className="rounded-full bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
          <Loader2 className="h-8 w-8 animate-spin text-atomberg-gold-dark" />
        </div>
        <p className="text-sm font-medium text-slate-500">Loading Atomberg Portal...</p>
      </div>
    </div>
  );
}
