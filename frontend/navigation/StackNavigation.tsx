/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/discover/Header';
import {Subscribe} from '../screens/subscribe';
import MintNft from '../screens/subscribe/MintNft';

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
            headerShown: false,
          }}
          name="Discover"
          component={Subscribe}
        />
        <Stack.Screen
          options={{
            header: () => <Header title={'Discover'} />,
            presentation: 'modal',
          }}
          name="MintNft"
          component={MintNft}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
