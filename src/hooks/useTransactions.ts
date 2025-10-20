import useSWR from 'swr';
import { fetcher, Transaction } from '../lib/api';
import { useState, useMemo } from 'react';

export function useTransactions() {
	const { data, error, isValidating, mutate } = useSWR<Transaction[]>('/transactions', fetcher);
	const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
	const [page, setPage] = useState(1);
	const pageSize = 10;

	const sorted = useMemo(() => {
		if (!data) return [] as Transaction[];
		const copy = [...data];
		copy.sort((a, b) => {
			if (sortBy === 'date') {
				const da = new Date(a.date).getTime();
				const db = new Date(b.date).getTime();
				return sortDir === 'asc' ? da - db : db - da;
			}
			return sortDir === 'asc' ? a.amount - b.amount : b.amount - a.amount;
		});
		return copy;
	}, [data, sortBy, sortDir]);

	const paged = useMemo(() => {
		const start = (page - 1) * pageSize;
		return sorted.slice(start, start + pageSize);
	}, [sorted, page]);

	return {
		transactions: paged,
		total: data?.length ?? 0,
		isLoading: !data && !error,
		error,
		isValidating,
		mutate,
		page,
		setPage,
		pageSize,
		sortBy,
		setSortBy,
		sortDir,
		setSortDir
	};
}

