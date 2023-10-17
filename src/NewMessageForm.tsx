import React from 'react';
import {Pressable, Text, TextInput} from 'react-native';

export default function NewMessageForm() {
  return (
    <>
      <TextInput testID="messageText" />
      <Pressable testID="sendButton">
        <Text>Send</Text>
      </Pressable>
    </>
  );
}
