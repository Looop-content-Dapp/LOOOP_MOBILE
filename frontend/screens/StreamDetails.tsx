/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationProp,
  ParamListBase,
  useRoute,
} from '@react-navigation/native';
import {Iconify} from 'react-native-iconify';
import {artistsArr, formatNumber} from '../utils/ArtistArr';

interface RootStackParamList {
  roomId: string;
  image: any;
  desc: string;
  title: string;
  name: string;
}

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Subscribe = ({navigation}: Props) => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [currentScreen, setCurrentScreen] = useState(0);
  const route = useRoute();
  const {params} = route as {params: RootStackParamList};
  // const [loading, setLoading] = useState(false);
  const {desc, image, roomId, title, name} = params;

  function filterArtistByName(artists: any[]): any[] {
    return artists.filter(artist => artist.name === name);
  }

  const filteredArtists = filterArtistByName(artistsArr);

  const artist = filteredArtists[0];
  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <ScrollView contentContainerStyle={{flex: 1, minHeight: '100%'}}>
        <ImageBackground
          source={{
            uri: image,
          }}
          className="h-[200px] w-[100%]">
          <Text className="text-[30px] absolute top-[150px] font-bold text-[#fff]">
            {title}
          </Text>
        </ImageBackground>
        <View className="px-4 h-[150px] space-y-6 my-5">
          <View className="flex-row w-full items-start justify-between">
            <View className="space-y-3">
              <Text className="text-[24px] font-bold text-[#ffffff]">
                {title}
              </Text>
              <View className="flex-row items-center space-x-3">
                <Pressable className="border border-[#A94FB4] px-2 py-2 rounded-[48px]">
                  <Text className="text-[14px] text-[#A94FB4]">
                    Subscriber event
                  </Text>
                </Pressable>
                <Pressable className="bg-red-600 px-5 py-2 rounded-[48px]">
                  <Text className="text-[14px] text-[#ffff]">Live</Text>
                </Pressable>
              </View>
            </View>
            <Iconify icon="mingcute:more-2-line" size={24} color="#fff" />
          </View>

          <View className="flex-row items-start space-x-4">
            <Image
              source={{
                uri: artist?.image,
              }}
              className="w-[50px] h-[50px] rounded-full"
            />
            <View>
              <Text className="text-[#fff] text-[20px] font-bold">
                {artist?.name}
              </Text>
              <View className="flex-row items-center space-x-6">
                <Text className="text-[#A5A6AA] text-[16px]">
                  {formatNumber(artist?.followers)} Following
                </Text>
                <Text className="text-[#A5A6AA] text-[16px]">
                  {formatNumber(artist?.following)} Subscribers
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View></View>
        <View className="h-[166px] w-[90%] bg-[#12141B] space-y-2 mx-auto my-5 p-[16px] rounded-[16px]">
          <Text className="text-[#A5A6AA] text-[14px] font-bold">
            About this stream
          </Text>
          <Text className="text-[#A5A6AA] text-[14px] font-medium">
           {desc}
          </Text>
        </View>

        <View className="mx-5 w-[90%] absolute -bottom-0">
          <TouchableOpacity className="bg-[#2DD881] items-center py-[18px] px-[10px] rounded-[48px]">
            <Text className="text-[#0A0B0F] text-[16px] font-bold">
              Start Listening
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscribe;
