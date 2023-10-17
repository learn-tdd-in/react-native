import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NewMessageForm from './src/NewMessageForm';

export default function App() {
  function handleSend() {}

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <NewMessageForm onSend={handleSend} />
    </SafeAreaView>
  );
}
