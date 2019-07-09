import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

export default class NewMessageForm extends Component {
  render() {
    return (
      <View>
        <TextInput
          testID="messageText"
        />
        <Button
          title="Send"
          testID="sendButton"
        />
      </View>
    );
  }
}
