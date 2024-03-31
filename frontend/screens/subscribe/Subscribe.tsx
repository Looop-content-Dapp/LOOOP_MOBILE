/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArtistInfo from '../../components/subscribe/ArtistInfo';
import SelectionTab from '../../components/subscribe/SelectionTab';
import Music from '../../components/subscribe/Music';
import Streams from '../../components/subscribe/Streams';
import Collectible from '../../components/subscribe/Collectible';
import {BottomSheet} from '@rneui/themed';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

// Define the interface for your component's props
interface SubscribeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Subscribe = ({navigation}: SubscribeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tabs = [
    {
      title: 'Music',
      components: <Music />,
    },
    {
      title: 'Streams',
      components: <Streams />,
    },
    {
      title: 'Collectible',
      components: <Collectible />,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, minHeight: '100%'}}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/Rema.jpeg')}
          className="h-[200px] w-[100%]">
          <Text>back</Text>
        </ImageBackground>
        <ArtistInfo route={navigation} isActive={setIsVisible} />
        <SelectionTab tabs={tabs} />
      </ScrollView>
      <BottomSheet
        modalProps={{}}
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        backdropStyle={{
          height: 400,
          width: '100%',
        }}>
        <View className="h-[500px] bg-[#000000] items-center  w-full rounded-t-3xl overflow-hidden">
          <Image
            source={require('../../assets/images/backdrop.png')}
            className="h-[251px] w-full"
          />
          <View className="items-center w-[318px] mt-[30px] space-y-[20px]">
            <Text className="text-[#fff] text-[18px]">
              Subscribing to a creator mints their subscriber NFT. These NFTs
              could give you unlimited access to their content, livestreams,
              event and many other perks. Subscriber NFTs can be bought with
              Looop tokens
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('/MintNft')}
              className="bg-[#A94FB4] w-full items-center py-5 rounded-[38px]">
              <Text className="text-[#fff] font-bold">
                Subscribe to creator
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Subscribe;
