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
import DisconnectButton from '../components/DisconnectButton';
import SignTransactionButton from '../components/SignTransactionButton';

interface RootStackParamList {
  roomId: string;
  image: any;
  desc: string;
  title: string;
}

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Subscribe = ({navigation}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);
  const route = useRoute();
  const {params} = route as {params: RootStackParamList};
  const [loading, setLoading] = useState(false);
  const {desc, image, roomId, title} = params;

  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <ScrollView>
        {image ? (
          <ImageBackground
            source={{
              uri: image,
            }}
            className="h-[200px] w-[100%]">
            <Pressable
              onPress={() => navigation.goBack()}
              className="border-2 border-[#fff] h-[30px] w-[30px] rounded-full p-2 items-center justify-center">
              <Image
                source={require('../assets/images/arrow.png')}
                className="h-[20px] w-[20px]"
              />
            </Pressable>
          </ImageBackground>
        ) : (
          <ImageBackground
            source={{
              uri: image,
            }}
            className="h-[200px] w-[100%]">
            <Pressable
              onPress={() => navigation.goBack()}
              className="border-2 border-[#fff] h-[30px] w-[30px] rounded-full p-2 items-center justify-center">
              <Image
                source={require('../assets/images/arrow.png')}
                className="h-[20px] w-[20px]"
              />
            </Pressable>
          </ImageBackground>
        )}
        <View className="flex-row w-full items-start justify-between p-4">
          <View className="space-y-3">
            <Text className="text-[20px] font-bold text-[#ffffff]">
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
      </ScrollView>
      <SignTransactionButton />
    </SafeAreaView>
  );
};

export default Subscribe;
