import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Collectible from './Collectible';
import Streams from './Streams';
import Albums from './music/Albums';
import Singles from './music/Singles';
import Playlist from './music/Playlist';

const Music = () => {
  const [active, setActive] = useState('Albums');
  const tabs = [
    {
      title: 'Albums',
    },
    {
      title: 'Singlesa',
    },
    {
      title: 'Playlist',
    },
  ];
  return (
    <View>
      <View className='flex-row'>
        {tabs.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActive(item.title)}
            className={`${
              active === item.title
                ? 'border-b-2 bg-[#FF6D1B] rounded-[48px] w-[100px] pb-3'
                : ''
            } w-[90px] items-center m-2 py-2.5`}>
            <Text
              className={`${
                active === item.title && 'text-[16px] font-bold text-[#000]'
              } text-[#fff]`}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {active === 'Albums' && <Albums />}
      {active === 'Singles' && <Singles />}
      {active === 'Playlist' && <Playlist />}
    </View>
  );
};

export default Music;
