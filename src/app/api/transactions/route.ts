import { NextResponse } from 'next/server';

export async function GET() {
  const tx = [
    { id: 't1', date: '2025-07-22', type: 'BUY', symbol: 'EQT', amount: 15, price: 155.2 },
    { id: 't2', date: '2025-07-18', type: 'SELL', symbol: 'ALT', amount: 5, price: 42.1 },
    { id: 't3', date: '2025-07-10', type: 'BUY', symbol: 'BND', amount: 100, price: 100.0 },
    { id: 't4', date: '2025-06-30', type: 'BUY', symbol: 'CRYPTO', amount: 0.5, price: 62000 },
  ];
  return NextResponse.json({ transactions: tx });
}
