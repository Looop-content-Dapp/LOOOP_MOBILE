/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TextInput, Pressable} from 'react-native';
import {artistsArr} from '../../utils/ArtistArr';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Iconify} from 'react-native-iconify';
import {TouchableOpacity} from 'react-native';
import {Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectArtist = () => {
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const [animation] = useState(new Animated.Value(0)); // Create an animated value
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        {
          iterations: -1, 
        },
      ).start();

      // Route to homepage after 5 seconds
      setTimeout(() => {
        navigation.navigate('TabNavigator'); 
      }, 5000);
    }
  }, [isLoading, animation, navigation]);

  const handleSelectArtist = artist => {
    const isSelected = selectedArtists.includes(artist);
    if (isSelected) {
      setSelectedArtists(selectedArtists.filter(a => a !== artist));
    } else {
      const newSelectedArtists = [...selectedArtists, artist];
      setSelectedArtists(newSelectedArtists);
      if (newSelectedArtists.length >= 3) {
        // Check if 3 creators are selected
        setIsLoading(true); // Set loading state to true
      }
    }
  };

  // Conditionally render the loading screen
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/images/loading.png')} />
        <Text className="text-[#fff] text-[20px] font-black">
          Building your home feed
        </Text>
        <Text className="text-[#A5A6AA] text-[14px] font-black">
          Please wait...
        </Text>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => handleSelectArtist(item)}
      style={{
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF6D1B',
        borderRadius: 50,
      }}>
      <View
        style={{
          borderWidth: selectedArtists.includes(item) ? 2 : 0,
          borderColor: '#FF6D1B',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        {selectedArtists.includes(item) && (
          <View className="absolute top-[25px] bg-[#FF6D1B] w-[50px] p-3 h-[50px] right-[20px] rounded-full">
            <Iconify icon="mdi:check" size={24} color="#Fff" />
          </View>
        )}
      </View>
      <Text className="text-lg text-[#fff] mt-2">{item.name}</Text>
      <Text className="text-sm mt-2">Follows: {item.follows}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        minHeight: '100%',
        padding: 14,
      }}>
      <View className="h-[140px] mt-[40px] space-y-[16px]">
        <Text className="text-[20px] font-bold text-[#ffffffff]">
          Welcome to Looop
        </Text>
        <Text className="text-[#A5A6AA] font-normal text-[16px]">
          The music social platform built specially for the creators and for the
          fans. To start exploring this new experience, follow some creators...
        </Text>
      </View>

      <View className="h-[60px] bg-[#12141B] flex-row items-center px-4">
        <Iconify icon="mdi:search" size={24} color="#787A80" />
        <TextInput
          placeholder="Explore creators on Looop"
          placeholderTextColor="#787A80"
          className="w-full h-full"
        />
      </View>
      <FlatList
        data={artistsArr}
        renderItem={renderItem}
        numColumns={3}
        style={{
          marginTop: 50,
        }}
        ListHeaderComponent={() => (
          <Text className="text-[16px] font-bold text-[#ffff]">
            Popular around your Location
          </Text>
        )}
      />
      <View className="w-full items-center absolute bottom-0">
        <TouchableOpacity className="bg-[#FF6D1B] h-[60px] w-[95%] ml-6 flex-row space-x-9 items-center justify-center rounded-[48px]">
          <Text className="text-[16px] text-[#fff] font-bold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectArtist;
