import { render } from '@testing-library/react';
import React from 'react';
import App from './app';

test('renders landing title', () => {
  const { getAllByText } = render(<App />);
  const titleElements = getAllByText(/LearnML Program/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
