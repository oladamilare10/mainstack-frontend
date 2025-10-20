import { render, screen } from '@testing-library/react';
import UserCard from '../components/UserCard';

describe('UserCard', () => {
  it('renders name and email', () => {
    render(<UserCard user={{ id: '1', name: 'Alice', email: 'a@a.com' }} /> as any);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('a@a.com')).toBeInTheDocument();
  });
});
