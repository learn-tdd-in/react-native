import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleChangeText = (text) => {
    this.setState({ inputText: text });
  }

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <TextInput
          value={inputText}
          testID="messageText"
          onChangeText={this.handleChangeText}
        />
        <Button
          title="Send"
          testID="sendButton"
        />
      </View>
    );
  }
}
