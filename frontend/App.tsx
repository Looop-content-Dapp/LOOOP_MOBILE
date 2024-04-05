/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DataProvider} from './context/DataContext';
import {HuddleClient, HuddleProvider} from '@huddle01/react';
import {StreamProvider} from './context/StreamContext';

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
      <HuddleProvider
        key="bXyBT4jn3ahSgflply_Blei901u7LbVHr"
        client={huddleClient}>
        <View style={{flex: 1}}>
          <StatusBar barStyle="default" backgroundColor="#000000" />
          <StreamProvider>
            <DataProvider>
              <StackNavigation />
            </DataProvider>
          </StreamProvider>
        </View>
      </HuddleProvider>
    </SafeAreaProvider>
  );
}

export default App;
