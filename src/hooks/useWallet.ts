import useSWR from 'swr';
import { fetcher, Wallet } from '../lib/api';

export function useWallet() {
	const { data, error, isValidating, mutate } = useSWR<Wallet>('/wallet', fetcher);
	return { wallet: data, isLoading: !data && !error, error, isValidating, mutate };
}
