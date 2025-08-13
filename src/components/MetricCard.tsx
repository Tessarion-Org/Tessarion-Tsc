import Card from './Card';

export default function MetricCard({ title, value, delta }: { title: string; value: string; delta?: number }) {
  const up = (delta ?? 0) >= 0;
  return (
    <Card title={title}>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-semibold">{value}</span>
        {delta !== undefined && (
          <span className={`text-sm font-medium ${up ? 'text-green-600' : 'text-red-600'}`}>
            {up ? '+' : ''}{delta.toFixed(2)}%
          </span>
        )}
      </div>
    </Card>
  );
}
