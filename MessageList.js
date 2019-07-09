import React from 'react';
import {
  FlatList,
  Text,
} from 'react-native';

const MessageList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={item => item}
    renderItem={({ item }) => <Message text={item} />}
  />
);

const Message = ({ text }) => <Text>{text}</Text>;

export default MessageList;
