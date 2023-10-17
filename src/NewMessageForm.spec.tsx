import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';

    let sendHandler: jest.Mock;

    beforeEach(() => {
      sendHandler = jest.fn().mockName('sendHandler');

      render(<NewMessageForm onSend={sendHandler} />);

      fireEvent.changeText(screen.getByTestId('messageText'), messageText);
      fireEvent.press(screen.getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(screen.getByTestId('messageText')).toHaveProp('value', '');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
