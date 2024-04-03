import {TextInput, Pressable, Text} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type Props = {
  route: NavigationProp<ParamListBase>;
};

const Input = ({route}: Props) => {
  return (
    <Pressable className="flex-row items-center w-[80%] h-[56px] border border-gray-900 rounded-[10px]">
      <Text onPress={() => route.navigate('Search')} className="text-white">
        hello
      </Text>
      <TextInput
        className="w-full h-full text-[14px] px-2"
        placeholder="Search Creators, Artistes, Songs, Albums, Playlists"
        placeholderTextColor="#A5A6AA"
      />
    </Pressable>
  );
};

export default Input;
