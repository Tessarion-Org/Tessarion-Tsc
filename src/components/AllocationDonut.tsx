'use client';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function AllocationDonut({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} innerRadius={55}>
            {data.map((_, i) => (
              <Cell key={i} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
      }
