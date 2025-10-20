import useSWR from 'swr';
import { fetcher, User } from '../lib/api';

export function useUser() {
	const { data, error, isValidating, mutate } = useSWR<User>('/user', fetcher);
	return { user: data, isLoading: !data && !error, error, isValidating, mutate };
}
