import React, {useState} from 'react';
import {Pressable, Text, TextInput} from 'react-native';

interface NewMessageFormProps {
  onSend: (message: string) => void;
}

export default function NewMessageForm({onSend}: NewMessageFormProps) {
  const [inputText, setInputText] = useState('');

  function handleSend() {
    onSend(inputText);
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
