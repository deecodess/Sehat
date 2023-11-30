import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Dashboard from '../Dashboard/Dashboard';

describe ('Dashboard component', () => {
  it ('renders without crashing', () => {
    render (<Dashboard />);
  });

  it ('displays the list of PDF items', () => {
    render (<Dashboard />);
    expect (
      screen.getByRole ('heading', {level: 1, name: /sehat dashboard/i})
    ).toBeInTheDocument ();
    const pdfs = screen.getAllByRole ('listitem');
    expect (pdfs.length).toBeGreaterThan (0);

    pdfs.forEach ((pdf, index) => {
      expect (pdf).toHaveTextContent (`Report ${index + 1}`);
      expect (pdf).toHaveTextContent (/2023-10-20/);
    });
  });

  it ('handles download button click correctly', () => {
    render (<Dashboard />);
    const consoleSpy = jest
      .spyOn (console, 'log')
      .mockImplementation (() => {});
    fireEvent.click (screen.getAllByText (/download/i)[0]);

    expect (consoleSpy).toHaveBeenCalledWith (
      'Downloading /path-to-your-file1.pdf'
    );

    consoleSpy.mockRestore ();
  });
});
