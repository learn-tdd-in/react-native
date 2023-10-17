import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NewMessageForm from './src/NewMessageForm';

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <NewMessageForm onSend={handleSend} />
    </SafeAreaView>
  );
}
