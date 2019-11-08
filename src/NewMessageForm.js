import React from 'react';
import {TextInput, View} from 'react-native';

const NewMessageForm = () => {
  return (
    <View>
      <TextInput testID="messageText" />
    </View>
  );
};

export default NewMessageForm;
