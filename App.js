import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

export default class App extends Component {
  state = { messages: [] }

  handleSend = (newMessage) => {
    this.setState(state => ({ messages: [newMessage, ...state.messages] }));
  }

  render() {
    const { messages } = this.state;
    return (
      <View>
        <NewMessageForm onSend={this.handleSend} />
        <MessageList data={messages} />
      </View>
    );
  }
}
