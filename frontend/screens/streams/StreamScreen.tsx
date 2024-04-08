/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useDataStore} from '../../context/DataContext';
import StreamCard from '../../components/subscribe/StreamCard';

const StreamScreen = () => {
  const {data} = useDataStore();
  const [active, setActive] = useState('Live');
  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <Image
        source={require('../../assets/images/streamheader.png')}
        className="h-[160px] w-full"
      />
      <View className="flex-row items-center justify-evenly">
        <Pressable
          className={`${
            active === 'Live' ? 'border-b border-[#2DD881]' : 'border-none'
          } py-6 px-12 items-center justify-center`}>
          <Text className="text-[16px] font-semibold text-[#ffffff]">Live</Text>
        </Pressable>
        <Pressable
          className={`${
            active === 'Upcoming' ? 'border-b border-[#2DD881]' : 'border-none'
          } py-6 px-12 items-center justify-center`}>
          <Text className="text-[16px] font-semibold text-[#ffffff]">
            Upcoming
          </Text>
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 8,
          margin: 6,
        }}
        contentContainerStyle={{
          gap: 16,
          alignItems: 'center',
        }}>
        {data.map((item, index) => (
          <StreamCard key={index} stream={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StreamScreen;
