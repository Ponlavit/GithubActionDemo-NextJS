/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from 'pages/index';

describe('Test page:Home', () => {
  afterEach(cleanup);

  it('render text', () => {
    const { getByTestId } = render(<Home />);
    const title = getByTestId('txt.title.hello');
    expect(title).toBeInTheDocument();
  });

  it('render button', () => {
    const { getByTestId } = render(<Home />);
    const button = getByTestId('btn.codeit');
    expect(button).toBeInTheDocument();
  });
});
