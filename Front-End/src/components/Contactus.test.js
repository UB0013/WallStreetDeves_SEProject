import React from 'react';
import { render, screen } from '@testing-library/react';
import Contactus from './Contactus';

describe('Contactus Component', () => {
  test('renders Contactus component with content', () => {
    // Render the Contactus component
    render(<Contactus />);

    const formSubmitButton = screen.getByRole('button', { name: /Submit/i });
    expect(formSubmitButton).toBeInTheDocument(); // We expect 1 submit button
  });
});
