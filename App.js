import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';

export default class App extends Component {
  state = { messages: [] }

  handleSend = (newMessage) => {
    this.setState(state => ({ messages: [newMessage, ...state.messages] }));
  }

  render() {
    return (
      <View>
        <NewMessageForm onSend={this.handleSend} />
      </View>
    );
  }
}
