/* eslint-disable prettier/prettier */
import { View, TextInput, Alert } from 'react-native';
import React from 'react';

const Input = () => {
  return (
    <View className="flex-row items-center w-[80%] h-[56px] border border-gray-900 rounded-[10px]">
     <TextInput onFocus={() => Alert.alert('Welcome')} className="w-full h-full text-[14px] px-2" placeholder="Search Creators, Artistes, Songs, Albums, Playlists" placeholderTextColor="#A5A6AA" />
    </View>
  );
};

export default Input;
