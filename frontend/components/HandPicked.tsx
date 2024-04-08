import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {newStuff} from '../utils';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

type Props = {
  route: NavigationProp<ParamListBase>;
};

const HandPicked = ({route}: Props) => {
  return (
    <View className="h-[268px] mt-3">
      <View className="flex-row items-center justify-between w-full px-3">
        <Text className="text-[#fff] text-[20px] font-bold">
          Handpicked just for you
        </Text>
        <Text className="text-[#fff] text-[14px] font-bold">see more</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newStuff.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              route.navigate('Home', {
                screen: 'MusicPage',
                params: {
                  title: item.title,
                  image: item.image,
                  track: item.tracks,
                  type: item.type,
                  artist: item.artist,
                },
              })
            }
            className="flex items-center min-w-[140px] h-[214px] rounded-lg m-2">
            <Image
              source={item.image}
              className="w-full h-[140px] rounded-lg"
            />
            <View className="flex flex-col">
              <Text className="text-white text-lg font-semibold">
                {item.title}
              </Text>
              <Text className="text-white">{item.artist}</Text>
              <Text
                className={`${
                  item.type === 'single'
                    ? 'bg-green-500 text-[#000]'
                    : 'bg-purple-500 text-[#fff]'
                } font-bold px-2 items-center py-1 rounded-[24px] w-[60px] mt-2`}>
                {item.type}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default HandPicked;
