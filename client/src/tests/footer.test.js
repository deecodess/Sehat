import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from '../components/Footer/Footer';

describe ('Footer component', () => {
  it ('renders without crashing', () => {
    render (<Footer />);
  });

  it ('displays the author information and image', () => {
    render (<Footer />);
    expect (
      screen.getByText (/built by deepanshi sharma and team/i)
    ).toBeInTheDocument ();
    expect (screen.getByAltText (/blue heart/i)).toBeInTheDocument ();
  });
});
