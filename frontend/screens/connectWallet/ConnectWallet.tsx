/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useAuthorization} from '../../providers/AuthorizationProvider';
import {SubscribeProps} from 'export';
import {
  ConnectPhanthomButton,
  ConnectWithOkto,
} from '../../components/connectButtons/index';

const ConnectWallet = ({navigation}: SubscribeProps) => {
  const {selectedAccount} = useAuthorization();

  // Check if selectedAccount exists
  if (selectedAccount) {
    // If selectedAccount exists, show success screen
    return (
      <SafeAreaView
        style={{
          flex: 1,
          minHeight: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View className="px-3 py-5 items-center justify-center">
          <Image
            source={require('../../assets/images/success.png')}
            className="w-[64px] h-[64px]"
          />
          <View className="mt-4 space-y-2 items-center">
            <Text className="text-[24px] font-bold text-[#ffffffff]">
              Sign in Successful!
            </Text>
            <Text className="text-[#A5A6AA] font-normal text-[16px]">
              Your wallet is now connected to Looop.
            </Text>
            <Text className="text-[#A5A6AA] font-normal text-[20x]">
              Learn More
            </Text>
          </View>
        </View>
        <View className="w-full items-center absolute bottom-0">
          <TouchableOpacity
            onPress={() => navigation.navigate('Select')}
            className="bg-[#FF6D1B] h-[60px] w-[90%] flex-row space-x-9 items-center justify-center rounded-[48px]">
            <Text className="text-[16px] text-[#fff] font-bold">Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    // If selectedAccount does not exist, show the default content
    return (
      <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
        <View className="px-3 py-5">
          <Image
            source={require('../../assets/images/splash2.png')}
            className="w-[72.44px] h-[32px]"
          />
          <View className="mt-4 space-y-2">
            <Text className="text-[24px] font-bold text-[#ffffffff]">
              Connect Wallet to sign in
            </Text>
            <Text className="text-[#A5A6AA] font-normal text-[16px]">
              Welcome to Looop. The music social platform built specially for
              the creators and for the fans. To sign in, simply connect your
              Solana network. Learn more here
            </Text>
          </View>
        </View>

        <View className="items-center justify-center pt-[50px] space-y-6">
          <ConnectPhanthomButton title="Connect Phanthom Wallet" />
          <ConnectWithOkto title="Connect Okto Wallet" />
        </View>

        <View className="w-full items-center absolute bottom-0">
          <TouchableOpacity
            onPress={() => navigation.navigate('TabNavigator')}
            className="border border-[#ffffffff] h-[60px] w-[90%] flex-row space-x-9 items-center justify-center rounded-[48px]">
            <Text className="text-[16px] text-[#fff] font-light">
              Don’t have a wallet? Create one here
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default ConnectWallet;
