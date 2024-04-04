/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DataProvider} from './context/DataContext';
import {HuddleClient, HuddleProvider} from '@huddle01/react';

const huddleClient = new HuddleClient({
  projectId: 'BGzMBh-NTpaFZ9sdYjwMthzTIGbuJrGY',
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <HuddleProvider key="huddle01-provider" client={huddleClient}>
        <View style={{flex: 1}}>
          <StatusBar barStyle="default" backgroundColor="#000000" />
          <DataProvider>
            <StackNavigation />
          </DataProvider>
        </View>
      </HuddleProvider>
    </SafeAreaProvider>
  );
}

export default App;
