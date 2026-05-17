export function Progress({ value, color = 'bg-indigo-600', size = 'md' }: any) {
  const height = size === 'sm' ? 'h-1.5' : size === 'md' ? 'h-2' : 'h-3';
  return (
    <div className={`w-full rounded-full bg-slate-200 ${height}`}>
      <div
        className={`${height} rounded-full ${color} transition-all duration-500`}
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}
