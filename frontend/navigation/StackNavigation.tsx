import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/discover/Header';
import {Subscribe} from '../screens/subscribe';
import MintNft from '../screens/subscribe/MintNft';
import PayNft from '../screens/subscribe/PayNft';
import Library from '../screens/libraryScreen/Library';
import {Discover} from '../screens/discover';
import Search from '../screens/discover/Search';
import MusicDetails from '../screens/discover/MusicDetails';
import MusicPlayer from '../screens/discover/MusicPlayer';
import StreamDetails from '../screens/StreamDetails';
import Home from '../screens/home/Home';
import {Iconify} from 'react-native-iconify';
import Streams from '../components/subscribe/Streams';
import StreamScreen from '../screens/streams/StreamScreen';
import Splash from '../screens/Splash';
import Onboard from '../screens/Onboard';
import ConnectWallet from '../screens/connectWallet/ConnectWallet';
import SelectArtist from '../screens/connectWallet/SelectArtist';

// Create a stack navigator for each tab
const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const LibraryStack = createNativeStackNavigator();
const StreamsStack = createNativeStackNavigator();

// Define the screens for each stack
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#0A0B0F',
      },
    }}>
    <HomeStack.Screen name="HomeScreen" component={Home} />
    <HomeStack.Screen name="Subscribe" component={Subscribe} />
    <HomeStack.Screen name="MintNft" component={MintNft} />
    <HomeStack.Screen name="PayNft" component={PayNft} />
    <HomeStack.Screen
      name="MusicPage"
      component={MusicDetails}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const DiscoverStackScreen = () => (
  <DiscoverStack.Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: '#0A0B0F',
      },
    }}>
    <DiscoverStack.Screen
      name="DiscoverScreeen"
      component={Discover}
      options={{
        header: () => <Header title="Discover" />,
      }}
    />
    <DiscoverStack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
      }}
    />
    <DiscoverStack.Screen
      name="MusicPage"
      component={MusicDetails}
      options={{
        headerShown: false,
      }}
    />
  </DiscoverStack.Navigator>
);

const LibraryStackScreen = () => (
  <LibraryStack.Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: '#0A0B0F',
      },
    }}>
    <LibraryStack.Screen
      name="LibraryScreen"
      component={Library}
      options={{
        header: () => <Header title="Library" />,
      }}
    />
  </LibraryStack.Navigator>
);

const StreamsStackScreen = () => (
  <StreamsStack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#0A0B0F',
      },
    }}></StreamsStack.Navigator>
);

// Create the tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        tabBarActiveTintColor: '#FF6D1B', // Color for active state
        tabBarInactiveTintColor: 'gray', // Color for inactive state
        tabBarStyle: {
          backgroundColor: '#0A0B0F',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused ? (
                  <Iconify icon="iconamoon:home-fill" size={24} color={color} />
                ) : (
                  <Iconify
                    icon="iconamoon:home-duotone"
                    size={24}
                    color={color}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused ? (
                  <Iconify icon="mdi:compass" size={24} color={color} />
                ) : (
                  <Iconify icon="mdi:compass-outline" size={24} color={color} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Stream"
        component={StreamScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused ? (
                  <Iconify
                    icon="solar:soundwave-bold"
                    size={24}
                    color={color}
                  />
                ) : (
                  <Iconify
                    icon="solar:soundwave-bold-duotone"
                    size={24}
                    color={color}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                {focused ? (
                  <Iconify
                    icon="fluent:library-24-filled"
                    size={24}
                    color={color}
                  />
                ) : (
                  <Iconify
                    icon="fluent:library-20-regular"
                    size={24}
                    color={color}
                  />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

// Create the root stack navigator
const RootStack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#0A0B0F',
          },
        }}
        initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Onboard"
          component={Onboard}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="connectWallet"
          component={ConnectWallet}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Select"
          component={SelectArtist}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="StreamPage"
          component={StreamDetails}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
