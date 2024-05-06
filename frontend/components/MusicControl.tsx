import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Iconify} from 'react-native-iconify';

const MusicControl = () => {
  return (
    <View>
      <Pressable className="bg-[#FF6D1B] w-[72px] h-[72px] rounded-[64px] items-center justify-center">
        <Iconify icon="mdi:play" size={34} color="#fff" />
      </Pressable>
    </View>
  );
};

export default MusicControl;
