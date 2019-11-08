import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import NewMessageForm from './src/NewMessageForm';

const App = () => {
  const handleSend = newMessage => {};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <NewMessageForm onSend={handleSend} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
