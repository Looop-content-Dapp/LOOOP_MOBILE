/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

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
  const {goBack, navigate} = useNavigation();
  const {params} = route as {params: MusicDetailsParams};
  const [selectedTrack, setSelectedTrack] = useState();

  const {title, artist, image, track, type} = params;

  const handleTrackSelection = (trackItem: any) => {
    setSelectedTrack(trackItem);
    navigate('MusicPlayer', {
      title: trackItem.title,
      artist: trackItem.artist, // Assuming you want to pass the selected track item
      image: image,
    });
  };

  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <View className="flex-row items-center space-x-[130px] p-9">
        <Pressable onPress={() => goBack()}>
          <Image source={require('../../assets/images/arrow.png')} />
        </Pressable>
        <Text className="text-[#787A80] text-[14px] font-bold">
          {artist || 'Default Title'}
        </Text>
      </View>
      <ScrollView>
        <View className="items-center mt-[30px] space-y-[16px]">
          <Image source={image} className="w-[214px] h-[214px]" />
          <View className="h-[140px] pt-[10px] w-full items-center space-y-[8px]">
            <Text className="text-[#fff] text-[24px]">{title}</Text>
            <Text
              className={`${
                type === 'single'
                  ? 'bg-green-500 text-[#000]'
                  : 'bg-purple-500 text-[#fff]'
              } font-bold px-2 items-center py-1 rounded-[24px] justify-center w-[60px] m-auto`}>
              {type}
            </Text>
            <View className="flex-row items-center  space-x-4">
              <TouchableOpacity className="bg-[#FF6D1B] px-4 py-2.5 rounded-[32px] flex-row items-center space-x-3">
                <Icon name="controller-play" color="#fff" size={24} />
                <Text className="text-[#fff] font-bold">Play Now</Text>
              </TouchableOpacity>
              <TouchableOpacity className="border border-[#Fff] p-2 rounded-[32px]">
                <Icon name="heart-outlined" color="white" size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="border border-[#fff] p-2 rounded-[32px]">
                <Icon name="dots-three-vertical" color="white" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/** tracks */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 9,
            marginTop: 16,
          }}>
          {track.map((item, index) => (
            <View
              key={index}
              className="w-full flex-row items-center px-4 h-[74px] justify-between">
              <Pressable onPress={() => handleTrackSelection(item)}>
                <Text className="text-[#fff] font-bold text-[20px]">
                  {item.title}
                </Text>
                <Text className="text-[#787A80] text-[14px] font-semibold">
                  {item.artist}
                </Text>
              </Pressable>
              <TouchableOpacity className="p-2 rounded-[32px]">
                <Icon name="dots-three-vertical" color="white" size={20} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicDetails;
