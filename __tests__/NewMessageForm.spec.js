import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NewMessageForm from '../NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';

    let sendHandler;
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn();

      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('messageText'), messageText);
      fireEvent.press(getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
