import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import React from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';

const Streams = () => {
  const {navigate} = useNavigation();
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
      <View className="w-[90%] bg-[#12141B] h-[179px] p-2.5 rounded-[15px]">
        <View>
          <View className="flex-row items-start space-x-2">
            <Image
              source={require('../../assets/images/Rema.jpeg')}
              className="w-[64px] h-[64px] rounded-[10px]"
            />
            <View className="px-4">
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
          <View className="flex-row items-center space-x-4 p-2">
            <Text className="flex-row items-center text-[12px] text-[#A5A6AA] font-semibold">
              <Icon name="sound" type="antdesign" size={10} color="white" />
              123,678 Listening
            </Text>
            <Text className="flex-row items-center w-full text-[12px] text-[#A5A6AA] font-semibold">
              <Icon
                name="clockcircleo"
                type="antdesign"
                size={12}
                color="white"
              />
              on for <Text className="text-[#2DD881]">1h:20m:30s</Text>
            </Text>
          </View>
        </View>
        <View className="flex-row items-start justify-between px-4">
          <Pressable className="border border-[#A94FB4] px-2 py-2 rounded-[48px]">
            <Text className="text-[14px] text-[#A94FB4]">Subscriber event</Text>
          </Pressable>
          <TouchableOpacity className="bg-[#2DD881] px-6 py-2.5 rounded-[48px]">
            <Text className="text-[14px] font-medium">Join stream</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Streams;
