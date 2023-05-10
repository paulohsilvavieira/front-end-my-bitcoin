import Home from '@/pages';
import { screen, render } from '@testing-library/react';

describe('Index Page', () => {
  test('Find hello word test', () => {
    render(<Home />);

    expect(screen.getByTitle('Hello World')).toBeInTheDocument();
  });
});
