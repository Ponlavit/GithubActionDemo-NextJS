/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from 'pages/index';

describe('Test page:Home', () => {
  afterEach(cleanup);

  it('render text', () => {
    const { getByText } = render(<Home />);
    const title = getByText(/hello world/i);
    expect(title).toBeInTheDocument();
  });

  it('render button', () => {
    const { getByTestId } = render(<Home />);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
