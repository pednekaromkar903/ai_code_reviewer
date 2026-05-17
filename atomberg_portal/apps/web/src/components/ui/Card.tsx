export function Card({ title, value, subtitle, icon: Icon, trend }: any) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
          {trend && (
            <p className={`mt-1 text-sm font-medium ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        {Icon && (
          <div className="rounded-lg bg-slate-100 p-3">
            <Icon size={24} className="text-slate-600" />
          </div>
        )}
      </div>
    </div>
  );
}
