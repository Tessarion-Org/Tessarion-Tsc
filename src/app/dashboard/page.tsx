import MetricCard from '@/components/MetricCard';
import Card from '@/components/Card';
import PerformanceChart from '@/components/PerformanceChart';
import AllocationDonut from '@/components/AllocationDonut';
import PositionsTable from '@/components/PositionsTable';

async function getJSON(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed: ' + url);
  return res.json();
}

export default async function DashboardPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const [portfolio, history, tx] = await Promise.all([
    getJSON(base + '/api/portfolio'),
    getJSON(base + '/api/portfolio/history'),
    getJSON(base + '/api/transactions')
  ]);

  const alloc = portfolio.positions.map((p: any) => ({ name: p.symbol, value: p.value }));

  return (
    <main className="py-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Portfolio Value" value={`$${portfolio.summary.totalValue.toLocaleString()}`} delta={portfolio.summary.delta} />
        <Card title="Performance (30d)">
          <PerformanceChart data={history.points} />
        </Card>
        <Card title="Allocation">
          <AllocationDonut data={alloc} />
        </Card>
      </div>

      <Card title="Positions">
        <PositionsTable rows={portfolio.positions} />
      </Card>

      <Card title="Recent Transactions">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500"><th className="py-2 pr-4">Date</th><th className="py-2 pr-4">Type</th><th className="py-2 pr-4">Symbol</th><th className="py-2 pr-4">Amount</th><th className="py-2 pr-4">Price</th></tr>
            </thead>
            <tbody>
              {tx.transactions.map((t: any) => (
                <tr key={t.id} className="border-t">
                  <td className="py-2 pr-4">{t.date}</td>
                  <td className="py-2 pr-4">{t.type}</td>
                  <td className="py-2 pr-4">{t.symbol}</td>
                  <td className="py-2 pr-4">{t.amount}</td>
                  <td className="py-2 pr-4">{t.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
      }
