import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NewMessageForm from '../NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';

    let getByTestId;

    beforeEach(() => {
      ({ getByTestId } = render(<NewMessageForm />));

      fireEvent.changeText(getByTestId('messageText'), messageText);
      fireEvent.press(getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(getByTestId('messageText').props.value).toEqual('');
    });
  });
});
