/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
    title: string
}

const Header = ({title}: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#000', height: 80}}>
      <View className="flex-row items-center justify-between px-[24px] py-[22px]">
        <Text
        style={{
            fontFamily: 'GeneralSans-Bold',
        }} className="text-[#fff] text-[28px]">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <Image source={require('../../assets/images/profileimg.png')} className="w-[40px] h-[40px] object-contain" />
          <View className="flex-row items-center space-x-1">
                <Text className="text-[#FF6D1B] text-[12px] font-semibold">5000</Text>
            <Image source={require('../../assets/images/oui_token-constant.png')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
