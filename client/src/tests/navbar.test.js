import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import NavBar from '../components/Navbar/NavBar';

describe ('NavBar component', () => {
  it ('renders without crashing', () => {
    render(<NavBar/>);
  });

  it ('toggles menu when hamburger is clicked', () => {
    render (<NavBar />);
    const hamburgerButton = screen.getByTestId ('hamburger-button');

    fireEvent.click (hamburgerButton);

    expect (
      screen.getByTestId ('nav-menu').classList.contains ('active')
    ).toBe (true);
  });
});
