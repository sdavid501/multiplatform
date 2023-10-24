/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Config from 'react-native-config';

function App() {
  useEffect(() => {
    firestore()
      .collection('test')
      .add({
        name: `Hello from ${Config.ENV}`,
        age: 30,
      })
      .then(() => {
        console.log('Data added!');
      });
  });
  return (
    <View style={{marginTop: 40, flex: 1}}>
      <Text>Environment: {Config.ENV}</Text>
    </View>
  );
}

export default App;
