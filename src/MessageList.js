import React from 'react';
import {FlatList, Text} from 'react-native';

export default function MessageList({messages}) {
  return (
    <FlatList
      data={messages}
      keyExtractor={item => item}
      renderItem={({item}) => <Text>{item}</Text>}
    />
  );
}
