import Home from '@/pages/home';
import { screen, render } from '@testing-library/react';

describe('Home Page', () => {
  test('Find Wallets tests', () => {
    render(<Home />);
    expect(screen.getByText('Wallets')).toBeInTheDocument();
  });
});
