import { render, screen } from '@testing-library/react';
import TransactionsList from '../components/TransactionsList';

jest.mock('../../hooks/useTransactions', () => ({
  useTransactions: () => ({
    transactions: [
      { id: 't1', date: new Date().toISOString(), amount: 10, type: 'credit', description: 'Test' }
    ],
    isLoading: false,
    error: null,
    page: 1,
    setPage: () => {},
    total: 1,
    pageSize: 10,
    sortBy: 'date',
    setSortBy: () => {},
    sortDir: 'desc',
    setSortDir: () => {}
  })
}));

describe('TransactionsList', () => {
  it('renders a transaction row', () => {
    render(<TransactionsList /> as any);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
