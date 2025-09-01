import { render } from '@testing-library/react';
import React from 'react';
import App from '../app/app';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LearnML is a unique hackathon. Spread over 48 hours, it consists of a series of challenges on machine learning of increasing difficulty. This event is the perfect opportunity for participants to familiarize themselves with different aspects of machine learning methods! For those new to the field, this competition will allow you to learn a lot as we prepared documentation and tools for you to start! For veterans, we have also created some tough challenges for you to enjoy! Many prizes to win!/i);
  expect(linkElement).toBeInTheDocument();
});
