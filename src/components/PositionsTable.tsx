export default function PositionsTable({ rows }: { rows: { symbol: string; value: number; weight: number }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2 pr-4">Symbol</th>
            <th className="py-2 pr-4">Value ($)</th>
            <th className="py-2 pr-4">Weight</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.symbol} className="border-t">
              <td className="py-2 pr-4">{r.symbol}</td>
              <td className="py-2 pr-4">{r.value.toLocaleString()}</td>
              <td className="py-2 pr-4">{r.weight.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
