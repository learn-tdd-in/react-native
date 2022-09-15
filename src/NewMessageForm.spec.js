import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';

    beforeEach(() => {
      render(<NewMessageForm />);

      fireEvent.changeText(screen.getByTestId('messageText'), messageText);
      fireEvent.press(screen.getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('messageText')).toHaveProp('value', '');
    });
  });
});
