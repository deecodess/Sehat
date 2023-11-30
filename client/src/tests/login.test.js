import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Login from '../components/Login/Login';

describe ('Login component', () => {
  it ('renders without crashing', () => {
    render (<BrowserRouter><Login /></BrowserRouter>);
  });

  it ('handles login correctly', async () => {
    render (<BrowserRouter><Login /></BrowserRouter>);
    global.fetch = jest.fn ().mockResolvedValue ({
      ok: true,
    });

    fireEvent.change (screen.getByLabelText ('Username:'), {
      target: {value: 'testuser'},
    });
    fireEvent.change (screen.getByLabelText ('Password:'), {
      target: {value: 'testpassword'},
    });

    fireEvent.click (screen.getByText ('Login'));

    expect (window.alert).toHaveBeenCalledWith ('login sucess');
  });

  it ('handles login failure correctly', async () => {
    render (<BrowserRouter><Login /></BrowserRouter>);

    global.fetch = jest.fn ().mockResolvedValue ({
      ok: false,
    });

    fireEvent.change (screen.getByLabelText ('Username:'), {
      target: {value: 'testuser'},
    });
    fireEvent.change (screen.getByLabelText ('Password:'), {
      target: {value: 'testpassword'},
    });

    fireEvent.click (screen.getByText ('Login'));

    expect (window.alert).toHaveBeenCalledWith ('login failed');
  });
});
