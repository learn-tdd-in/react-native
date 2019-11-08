import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import NewMessageForm from './src/NewMessageForm';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <NewMessageForm />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
