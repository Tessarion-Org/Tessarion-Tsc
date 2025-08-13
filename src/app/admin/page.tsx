import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Card from '@/components/Card';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const role = (session as any)?.role || (session as any)?.user?.role;
  if (!session || role !== 'admin') {
    redirect('/?auth=1');
  }

  return (
    <main className="py-6 space-y-4">
      <Card title="Admin — Feature Flags">
        <p className="text-sm text-slate-600">(Mock) Toggle features for demos. Persist to your DB later.</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>• Advanced Analytics — <em>enabled</em></li>
          <li>• Realtime Quotes — <em>disabled</em></li>
          <li>• Beta Order Flow — <em>enabled</em></li>
        </ul>
      </Card>

      <Card title="Users">
        <p className="text-sm">Your session: {(session.user?.email || session.user?.name || 'unknown').toString()}</p>
        <p className="text-sm">Role: {role}</p>
      </Card>
    </main>
  );
}
