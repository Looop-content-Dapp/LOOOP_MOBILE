import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Iconify} from 'react-native-iconify';

interface TrackData {
  title: string;
  artist: string[];
  image: any;
  // Add other properties as needed
}

const RecentlyPlayed = () => {
  const [currentTrack, setCurrentTrack] = useState<TrackData | null>(null);

  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        const value = await AsyncStorage.getItem('selectedTrack');
        if (value !== null) {
          const trackData = JSON.parse(value) as TrackData;
          setCurrentTrack(trackData);
        }
      } catch (error) {
        console.error('Error fetching track data', error);
      }
    };
    fetchTrackData();
  }, [currentTrack]); // Empty dependency array means this effect runs once on mount

  return (
    <View className="bg-[#12141B] h-[169px] rounded-[10px] p-4">
      <Text className="text-[18px] text-[#787A80]">Continue Listening</Text>
      <View className="flex-row justify-between p-3">
        <View className="flex-row space-x-3">
          {!currentTrack?.image ? (
            <Image
              source={require('../assets/images/music.jpg')}
              className="h-[100px] w-[100px] rounded-[10px]"
            />
          ) : (
            <Image
              source={currentTrack?.image}
              className="h-[100px] w-[100px] rounded-[10px]"
            />
          )}

          <View className="">
            <Text className="text-[18px] text-[#ffffff] font-bold">
              {currentTrack?.title ? currentTrack?.title : 'Not Playing'}
            </Text>
            <View className="flex-row items-center space-x-2">
              {currentTrack?.artist.map((item, index) => (
                <Text
                  key={index}
                  className="text-[16px] text-[#787A80] font-medium">
                  {item}
                </Text>
              ))}
            </View>
            <View className="flex-row items-center gap-6 py-4">
              <Iconify icon="heroicons:backward-solid" size={24} color="#fff" />
              <Iconify icon="icon-park-solid:play" size={34} color="#FF6D1B" />
              <Iconify
                icon="heroicons:forward-16-solid"
                size={24}
                color="#fff"
              />
            </View>
          </View>
        </View>
        <Iconify icon="ant-design:more-outlined" size={24} color="#fff" />
      </View>
    </View>
  );
};

export default RecentlyPlayed;
