import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  isActive: React.Dispatch<React.SetStateAction<boolean>>;
  image: string,
  name: any,
  follow: any
};

const ArtistInfo = ({isActive, follow, name}: Props) => {
  return (
    <>
      <View className="h-[256px] m-4 space-y-[8px]">
        <View className="flex-row items-center space-x-2 w-[70%]">
          <Text className="text-[28px] font-bold text-[#fff]">{name}</Text>
          <Pressable>
            <Text className="text-[#2DD881] text-[12px]">Verified creator</Text>
          </Pressable>
          <View>
            <Text className="text-[#787A80]">#4 in Nigeria</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-3">
          <Text className="text-[16px] font-semibold text-[#787A80]">
            {follow}M Followers
          </Text>
          <Text className="text-[16px] font-semibold text-[#787A80]">
            45M Subscriber
          </Text>
        </View>

        <View className="flex-row items-center space-x-3 mb-[16px]">
          <TouchableOpacity className="border border-[#787A80] px-6 py-2.5 rounded-[48px]">
            <Text className="text-[#fff] text-[12px] font-normal">Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => isActive(true)}
            className="bg-[#A94FB4] px-6 py-2.5 rounded-[48px]">
            <Text className="text-[#fff] text-[12px] font-normal">
              Subscribe
            </Text>
          </TouchableOpacity>
        </View>

        <View className=" px-3 py-2.5 space-y-[8px] bg-[#12141B] rounded-[15px]">
          <Text className="text-[#787A80]">About Rema</Text>
          <Text className="text-[#787A80] font-normal">
            Divine Ikubor (born 1 May 2000), known professionally as Rema, is a
            Nigerian rapper, singer and songwriter. He gained initial
            recognition following the release of his 2019 song "Dumebi". That
            same year, he signed with D'Prince's record label, Jonzing World.
          </Text>
        </View>
      </View>
    </>
  );
};

export default ArtistInfo;
