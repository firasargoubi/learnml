import { render } from '@testing-library/react';
import React from 'react';
import App from './app';

test('renders link about data science course', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/full course on data science in french/i);
  expect(linkElement).toBeInTheDocument();
});
