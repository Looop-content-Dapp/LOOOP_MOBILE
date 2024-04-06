/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {Iconify} from 'react-native-iconify';

type Props = {
  title: string | undefined;
  image: any;
  artist: string[];
};

const ShareBottomSheet = ({artist, image, title}: Props) => {
  const options = [
    {
      icon: <Iconify icon="mdi:heart-outline" size={30} color="white" />,
      title: 'Add to Favourite',
    },
    {
      icon: <Iconify icon="ic:outline-queue" size={30} color="white" />,
      title: 'Add to Queue',
    },
    {
      icon: (
        <Iconify
          icon="material-symbols-light:queue-music-rounded"
          size={30}
          color="white"
        />
      ),
      title: 'Add to Playlist',
    },
    {
      icon: <Iconify icon="gg:profile" size={30} color="white" />,
      title: 'Go to Artists',
    },
    {
      icon: <Iconify icon="ri:album-line" size={30} color="white" />,
      title: 'Go to Album',
    },
    {
      icon: <Iconify icon="solar:share-linear" size={30} color="white" />,
      title: 'Share',
    },
  ];
  return (
    <View className="h-[490px] bg-[#12141B] items-cente space-y-[24px] w-full rounded-t-3xl overflow-hidden p-6">
      <View className="h-[64px] flex-row items-center justify-between">
        <View className="flex-row space-x-3">
          <Image source={image} className="w-[64px] h-[64px]" />
          <View className="space-y-3">
            <Text className="text-[#fff] font-semibold">{title}</Text>
            <Text className="w-[46px] h-[20px] bg-[#2DD881] rounded-[16px] text-xs text-center font-black">
              Single
            </Text>
          </View>
        </View>
        <Text className="text-[#fff] font-semibold text-[12px]">3:00</Text>
      </View>
      <View className="space-y-[16px]">
        {options.map((item, index) => (
          <View
            key={index}
            className="flex-row items-center space-x-4 border-b border-[#787A80] pb-4">
            {item.icon}
            <Text
              style={{fontFamily: 'GeneralSans-Semibold'}}
              className="text-[#fff] text-[16px] font-semibold">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ShareBottomSheet;
