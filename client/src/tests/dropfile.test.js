import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import copy from 'copy-to-clipboard';
import DropFileInput from '../components/drop-file-input/DropFileInput';

jest.mock ('axios');
jest.mock ('copy-to-clipboard');

describe ('DropFileInput component', () => {
  it ('renders without crashing', () => {
    render (<DropFileInput />);
  });

  it ('handles file drop correctly', () => {
    render (<DropFileInput />);

    const file = new File (['file content'], 'test-file.txt', {
      type: 'text/plain',
    });

    fireEvent.change (
      screen.getByRole ('button', {name: /drag & drop your files here/i}),
      {target: {files: [file]}}
    );

    expect (screen.getByText (/test-file.txt/i)).toBeInTheDocument ();
  });

  it ('handles file removal correctly', () => {
    render (<DropFileInput />);

    const file = new File (['file content'], 'test-file.txt', {
      type: 'text/plain',
    });

    fireEvent.change (
      screen.getByRole ('button', {name: /drag & drop your files here/i}),
      {target: {files: [file]}}
    );

    fireEvent.click (screen.getByText (/✖/i));

    expect (screen.queryByText (/test-file.txt/i)).toBeNull ();
  });

  it ('handles file submission correctly', async () => {
    render (<DropFileInput />);

    const file = new File (['file content'], 'test-file.txt', {
      type: 'text/plain',
    });

    fireEvent.change (
      screen.getByRole ('button', {name: /drag & drop your files here/i}),
      {target: {files: [file]}}
    );

    fireEvent.click (screen.getByRole ('button', {name: /submit/i}));

    await waitFor (() => {
      expect (
        screen.getByText (/file uploaded successfully/i)
      ).toBeInTheDocument ();
    });

    expect (
      screen.getByText (/https:\/\/example\.com\/test-file\.txt/i)
    ).toBeInTheDocument ();

    fireEvent.click (screen.getByText (/copy link/i));
    expect (copy).toHaveBeenCalledWith ('https://example.com/test-file.txt');
  });
});
