import React from 'react';
import {FlatList, Text} from 'react-native';

interface MessageListProps {
  messages: string[];
}

export default function MessageList({messages}: MessageListProps) {
  return (
    <FlatList
      data={messages}
      keyExtractor={item => item}
      renderItem={({item}) => <Text>{item}</Text>}
    />
  );
}
