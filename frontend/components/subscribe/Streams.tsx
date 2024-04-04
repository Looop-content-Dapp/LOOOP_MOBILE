import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

const Streams = () => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  let description =
    'Vibes with Remy Boy is a weekly AMA space where everyone can come vibe with Rema aka Remmy Boy and ask him anything that’s on your mind. This space is exclusively for Rema subscribers and community NFT holders.';
  return (
    <View className="items-center space-y-4 mt-5">
      <View className="w-[90%] bg-[#12141B] h-[179px] p-2.5">
        <View className="flex-row items-start space-x-2">
          <Image
            source={require('../../assets/images/Rema.jpeg')}
            className="w-[64px] h-[64px] rounded-[10px]"
          />
          <View>
            <View className="flex-row items-center space-x-3">
              <Text className="text-[16px] font-bold text-[#fff]">
                Vibes with Remmy Boy
              </Text>
              <Pressable className="bg-[#FF2222] px-4 py-2 rounded-[48px]">
                <Text className="text-[#fff] font-semibold text-[12px]">
                  Live
                </Text>
              </Pressable>
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              className="text-[#A5A6AA] text-[12px] w-[270px]">
              {truncateText(description, 200)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Streams;
