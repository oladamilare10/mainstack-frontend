export const API_BASE = 'https://fe-task-api.mainstack.io';

export async function fetcher<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export type User = {
  id?: string;
  first_name: string;
  last_name: string;
  email?: string;
  avatar?: string;
};

export type Wallet = {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
};

export type Transaction = {
  id: string;
  date: string; // ISO
  amount: number;
  type: 'debit' | 'credit' | string;
  description?: string;
  status?: 'successful' | 'pending' | 'failed';
  metadata?: {
    name?: string;
    type?: string;
    email?: string;
    quantity?: number;
    country?: string;
    product_name?: string;
  };
};
