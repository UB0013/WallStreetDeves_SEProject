import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders Home component with small description', () => {
    // Render the Home component
    const { getByAltText, getByText } = render(<Home />);

    // Assert that the image is rendered with alt text
    const image = getByAltText('');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('main_pic.png');

    // Assert that the small description is rendered
    const smallDesc = getByText(/Welcome to AlmaMingle: Connect, Learn, Thrive!/i);
    expect(smallDesc).toBeInTheDocument();
  });
});
