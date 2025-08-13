'use client';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function PerformanceChart({ data }: { data: { date: string; value: number }[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.6} />
              <stop offset="95%" stopColor="currentColor" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickMargin={8} />
          <YAxis tickMargin={8} />
          <Tooltip formatter={(v: any) => new Intl.NumberFormat().format(v as number)} />
          <Area type="monotone" dataKey="value" stroke="currentColor" fill="url(#pv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
