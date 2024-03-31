/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" backgroundColor="#000000" />
        <StackNavigation />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
