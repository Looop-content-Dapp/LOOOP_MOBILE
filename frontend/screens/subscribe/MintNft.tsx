import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface MintNftProps {
  navigation: NavigationProp<ParamListBase>;
}

interface RouteParams {
  name?: string;
  image?: string;
  followers?: number;
  desc: string;
  follow: number;
}

const MintNft = ({navigation}: MintNftProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  return (
    <View className="p-[20px] flex-1 min-h-screen items-center">
      <View className="items-start space-y-8">
        <Text className="text-[#A5A6AA] text-start font-semibold text-[16px]">
          Mint your subscriber NFT
        </Text>
        <Image
          source={require('../../assets/images/remanft.png')}
          className="w-[382px] h-[500px] rounded-[15px] "
        />
      </View>

      <View className="flex-row items-center justify-between w-[382px] h-[66px] mt-[18px]">
        <View>
          <Text className="text-[#ffffff] text-start font-semibold text-[16px]">
            {route?.params?.name} Subscribers NFT
          </Text>
          <Text className="text-[#A5A6AA] font-semibold text-[12px]">
            Unlimited
          </Text>
        </View>
        <View>
          <Text className="text-[#ffffff] text-start font-semibold text-[16px]">
            NFT cost
          </Text>
          <Text className="text-[#A5A6AA] font-semibold text-[12px]">
            12000 Looop
          </Text>
        </View>
      </View>

      <Text className="text-[#A5A6AA] text-start font-semibold text-[16px] pt-[30px]">
        Ravage NFT gives you unlimited access to all {route?.params?.name}{' '}
        content on Loop which include music, streams and community events.
      </Text>

      <View className="absolute top-[90%] w-full items-center mx-[20px]">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-[#A94FB4] w-full items-center py-5  rounded-[38px]">
          <Text className="text-[#fff] font-bold">Subscribe to creator</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 bg-gray-500/30 justify-center items-center">
          {!success ? (
            <View className="bg-[#000] w-[85%] min-h-[318px] rounded-[30px] p-4">
              <View className="pb-[20px]">
                <Text className="text-[24px] font-medium text-[#fff]">
                  Mint NFT?
                </Text>
                <View className="flex-row items-center space-x-2">
                  <Image
                    source={require('../../assets/images/profileimg.png')}
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
              <View className="items-center space-y-[30px]">
                <Image source={require('../../assets/images/card.png')} />
                <TouchableOpacity
                  onPress={() => {
                    setSuccess(true);
                    // Linking.openURL(
                    //   'https://app.dev.hel.io/s/6612af20d1253ae4aa70b7d2',
                    // );
                  }}
                  className="w-full items-center bg-[#A94FB4] py-5 mt-[30x] rounded-[50px]">
                  <Text className="text-[16px] font-bold text-[#ffff]">
                    Mint subscriber NFT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View className="bg-[#A94FB4] w-[85%] h-[318px] rounded-[30px] p-4">
              <ImageBackground
                source={require('../../assets/images/curl.png')}
                className="w-full h-full object-cover items-center">
                <View className="w-full items-center justify-center">
                  <TouchableOpacity className="items-center bg-[#fff] px-2.5 py-2.5 rounded-[50px]">
                    <Text className="text-[16px] font-bold text-[#000]">
                      Explore content
                    </Text>
                  </TouchableOpacity>
                  <Text className="text-[34px] font-bold text-[#0A0B0F] text-center">
                    Congratulations...you’re now a subscriber
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Subscribe', {
                      name: route?.params?.name,
                      image: route?.params?.image,
                      follow: route?.params?.followers,
                      follower: route?.params?.followers,
                      desc: route?.params?.desc,
                    })
                  }
                  className="w-full items-center bg-[#0A0B0F] py-5 mt-[30px] rounded-[50px]">
                  <Text className="text-[16px] font-bold text-[#ffff]">
                    Explore content
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default MintNft;
