import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
  it('should be able to render the Comics', () => {
    const { getByPlaceholderText } = render(<Home />);

    const searchField = getByPlaceholderText('Digite o título do quadrinho');

    fireEvent.change(searchField, { target: { value: 'iron' } });
  });
});
