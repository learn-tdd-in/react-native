import React from 'react';
import {Button, TextInput, View} from 'react-native';

const NewMessageForm = () => {
  return (
    <View>
      <TextInput testID="messageText" />
      <Button title="Send" testID="sendButton" />
    </View>
  );
};

export default NewMessageForm;
