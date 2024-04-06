import {TextInput, Pressable, Text} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

type Props = {
  route: NavigationProp<ParamListBase>;
};

const Input = ({route}: Props) => {
  return (
    <Pressable
      onPress={() => route.navigate('Search')}
      className="flex-row items-center w-[90%] h-[56px] border border-gray-900 rounded-[10px] px-2">
      <Icon name="magnifying-glass" type="entypo" color="#A5A6AA" />
      <TextInput
        className="w-full h-full text-[14px] px-2"
        placeholder="Search Creators, Artistes, Songs, Albums, Playlists"
        placeholderTextColor="#A5A6AA"
      />
    </Pressable>
  );
};

export default Input;
