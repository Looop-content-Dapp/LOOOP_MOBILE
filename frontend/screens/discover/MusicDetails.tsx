import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

interface MusicDetailsParams {
  title?: string; // Use optional chaining in case 'title' is not always provided
  image: any; // Assuming image is a string representing the image path or URL
  track:
    | {
        title: string;
        artist: string[];
      }[]
    | {
        title: string;
        artist: string[];
        uri: string;
      }[];
  type: string;
  artist: string[];
}

const MusicDetails = () => {
  const route = useRoute();
  const {params} = route as {params: MusicDetailsParams};

  const {title, artist, image, track, type} = params;

  return (
    <SafeAreaView>
      <View className="flex-row items-center space-x-[130px] p-9">
        <Image source={require('../../assets/images/arrow.png')} />
        <Text className="text-[#787A80] text-[14px] font-bold">
          {artist || 'Default Title'}
        </Text>
      </View>
      <View className="items-center mt-[30px]">
        <Image source={image} className="w-[214px] h-[214px]" />
        <View className="h-[114px] pt-[10px]">
          <Text className="text-[#fff]">{title}</Text>
          <Text
            className={`${
              type === 'single'
                ? 'bg-green-500 text-[#000]'
                : 'bg-purple-500 text-[#fff]'
            } font-bold px-2 items-center py-1 rounded-[24px] w-[60px] mt-2`}>
            {type}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity>
              <Text>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicDetails;
