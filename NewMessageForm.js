import React, { Component } from 'react';
import {
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
      </View>
    );
  }
}
