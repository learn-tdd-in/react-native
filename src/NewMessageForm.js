import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

const NewMessageForm = () => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    setInputText('');
  };

  return (
    <View>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Send" testID="sendButton" onPress={handleSend} />
    </View>
  );
};

export default NewMessageForm;
