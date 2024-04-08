/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import {ConnectionProvider, RPC_ENDPOINT} from './providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import {StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DataProvider} from './context/DataContext';
import {HuddleClient, HuddleProvider} from '@huddle01/react';
import {StreamProvider} from './context/StreamContext';
import {AuthorizationProvider} from './providers/AuthorizationProvider';

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
      <ConnectionProvider
        config={{commitment: 'processed'}}
        endpoint={clusterApiUrl(RPC_ENDPOINT)}>
        <AuthorizationProvider>
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
        </AuthorizationProvider>
      </ConnectionProvider>
    </SafeAreaProvider>
  );
}

export default App;
