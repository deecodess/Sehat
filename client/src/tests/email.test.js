import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import axios from 'axios';
import Email from '../components/Email/Email';

jest.mock ('axios');

describe ('Email component', () => {
  it ('renders without crashing', () => {
    render (<Email downloadLink="example-link" />);
  });

  it ('handles form submission correctly', async () => {
    render (<Email downloadLink="example-link" />);

    axios.post.mockResolvedValue ({data: {success: true}});

    fireEvent.change (screen.getByPlaceholderText (/sender/i), {
      target: {value: 'sender@example.com'},
    });
    fireEvent.change (screen.getByPlaceholderText (/receiver/i), {
      target: {value: 'receiver@example.com'},
    });
    fireEvent.submit (screen.getByRole ('button', {name: /send email/i}));

    await waitFor (() => {
      expect (
        screen.getByText (/email sent successfully/i)
      ).toBeInTheDocument ();
    });
    expect (
      screen.getByRole ('button', {name: /send email/i})
    ).toHaveTextContent (/send email/i);
  });
});
