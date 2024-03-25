import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup';

describe('Signup', () => {
    test('renders Signup', () => {
      // Render Signup
      const { Text, oText } = render(<Signup />);

      const logindetail = Text('');
      expect(logindetail).toBeDefined();
      expect(logindetail).typeof().toBe("string");
  
      // testing for login data is handled correctly
      // letters only
      const info = oText(/abc/i);
      expect(info).toBeInTheDocument();
      expect(info).toBeDefined();
      expect(info).typeof().toBe("string");

      // numbers only
      const info2 = oText(/123/i);
      expect(info2).toBeInTheDocument();
      expect(info2).toBeDefined();
      expect(info2).typeof().toBe("string");

      // special characters only
      const info3 = oText(/!@#/i);
      expect(info3).toBeInTheDocument();
      expect(info3).toBeDefined();
      expect(info3).typeof().toBe("string");

      // letters and numbers
      const info4 = oText(/abc123/i);
      expect(info4).toBeInTheDocument();
      expect(info4).toBeDefined();
      expect(info4).typeof().toBe("string");

      // letters and special characters
      const info5 = oText(/abc!@#/i);
      expect(info5).toBeInTheDocument();
      expect(info5).toBeDefined();
      expect(info5).typeof().toBe("string");

      // letters special characters and numbers
      const info6 = oText(/abc123!@#/i);
      expect(info6).toBeInTheDocument();
      expect(info6).toBeDefined();
      expect(info6).typeof().toBe("string");

    });
  });

