import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';

describe ('App component', () => {
  it ('renders without crashing', () => {
    render (
      <Router>
        <App />
      </Router>
    );
    expect (screen.getByText (/navbar/i)).toBeInTheDocument ();
    expect (
      screen.getByText (/drag & drop your files here/i)
    ).toBeInTheDocument ();
    expect (screen.getByText (/what is sehat/i)).toBeInTheDocument ();
    expect (
      screen.getByText (/built by deepanshi sharma and team/i)
    ).toBeInTheDocument ();
  });
});
