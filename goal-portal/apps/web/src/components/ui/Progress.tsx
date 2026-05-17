export function Progress({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-indigo-600 transition-all"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}
