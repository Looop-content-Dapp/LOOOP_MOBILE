/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BasedOnFav from '../../components/discover/BasedOnFav';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import HandPicked from '../../components/HandPicked';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <View className="flex-row items-center justify-between w-full px-5 py-2.5">
        <View>
          <Text className="text-[#787A80] text-[14px] font-medium">
            Welcome back to the looop
          </Text>
          <Text className="text-[#FFFFFF] text-[20px] font-medium">
            Phenomenuel
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Image
            source={require('../../assets/images/profileimg.png')}
            className="w-[40px] h-[40px] object-contain"
          />
          <View className="flex-row items-center space-x-1">
            <Text className="text-[#FF6D1B] text-[12px] font-semibold">
              5000
            </Text>
            <Image
              source={require('../../assets/images/oui_token-constant.png')}
            />
          </View>
        </View>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          padding: 16,
        }}>
        <HandPicked route={navigation} />
        <BasedOnFav route={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
