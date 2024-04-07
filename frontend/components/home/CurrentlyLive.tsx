/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useDataStore} from '../../context/DataContext';
import StreamCard from '../subscribe/StreamCard';
import {Pressable} from 'react-native';

const CurrentlyLive = () => {
  const {data} = useDataStore();
  return (
    <View className="">
      <View className="flex-row items-center justify-between px-4">
        <View className="flex-row items-center space-x-2">
          <Text className="text-[20px] text-[#ffffff] font-medium">
            Looop Streams
          </Text>
          <Pressable className="bg-[#FF2222] px-4 py-2 rounded-[48px]">
            <Text className="text-[#fff] font-semibold text-[12px]">Live</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
        }}>
        {data?.map((item: any, index: number) => (
          <StreamCard key={index} stream={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CurrentlyLive;
