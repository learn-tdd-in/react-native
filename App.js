import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NewMessageForm from './src/NewMessageForm';
import MessageList from './src/MessageList';

export default function App() {
  const [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </SafeAreaView>
  );
}
