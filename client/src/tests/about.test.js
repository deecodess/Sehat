import React from 'react';
import {render, screen} from '@testing-library/react';
import About from '../components/About/About';

describe ('About component', () => {
  it ('renders without crashing', () => {
    render (<About />);
  });

  it ('displays the main content', () => {
    render (<About />);
    expect (
      screen.getByRole ('heading', {level: 2, name: /what is sehat/i})
    ).toBeInTheDocument ();
    expect (
      screen.getByText (/effortlessly share large files securely/i)
    ).toBeInTheDocument ();
  });

  it ('displays the right section with cards', () => {
    render (<About />);

    expect (screen.getByAltText (/faster/i)).toBeInTheDocument ();
    expect (screen.getByAltText (/secure/i)).toBeInTheDocument ();
    expect (screen.getByAltText (/encrypted/i)).toBeInTheDocument ();
    expect (screen.getByAltText (/user friendly/i)).toBeInTheDocument ();
  });
});
