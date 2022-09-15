import React, {useState} from 'react';
import {Pressable, Text, TextInput} from 'react-native';

export default function NewMessageForm() {
  const [inputText, setInputText] = useState();

  function handleSend() {
    setInputText('');
  }

  return (
    <>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable testID="sendButton" onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </>
  );
}
