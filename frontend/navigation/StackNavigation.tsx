import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/discover/Header';
import {Subscribe} from '../screens/subscribe';
import MintNft from '../screens/subscribe/MintNft';
import PayNft from '../screens/subscribe/PayNft';
import Library from '../screens/library/Library';
import {Discover} from '../screens/discover';
import Search from '../screens/discover/Search';
import MusicDetails from '../screens/discover/MusicDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#000000',
          },
        }}>
        <Stack.Screen
          options={{
            header: () => <Header title={'Discover'} />,
          }}
          name="Discover"
          component={Discover}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Subscribe"
          component={Subscribe}
        />
        <Stack.Screen
          options={{
            header: () => <Header title={'Subscribe'} />,
            presentation: 'modal',
          }}
          name="MintNft"
          component={MintNft}
        />
        <Stack.Screen
          name="Nftmodal"
          component={PayNft}
          options={{
            presentation: 'card',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Library"
          component={Library}
          options={{
            header: () => <Header title={'Subscribe'} />,
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: () => <Header title={'Subscribe'} />,
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="MusicPage"
          component={MusicDetails}
          options={{
           headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
