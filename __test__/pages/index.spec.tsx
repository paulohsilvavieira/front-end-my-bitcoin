import Home from '@/pages/home';
import { screen, render } from '@testing-library/react';

describe('Home Page', () => {
  test('Find Hello World test', () => {
    render(<Home />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
