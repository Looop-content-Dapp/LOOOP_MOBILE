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
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArtistInfo from '../../components/subscribe/ArtistInfo';
import SelectionTab from '../../components/subscribe/SelectionTab';
import Music from '../../components/subscribe/Music';
import Streams from '../../components/subscribe/Streams';
import Collectible from '../../components/subscribe/Collectible';
import {BottomSheet} from '@rneui/themed';
import {
  NavigationProp,
  ParamListBase,
  useRoute,
} from '@react-navigation/native';
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import {db} from '../../firebase';

// Assuming you have a StackNavigator defined somewhere in your app
interface RootStackParamList {
  image: string;
  name: string;
  follow: number;
  owner: string;
  desc: string;
  follower: number;
}

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Subscribe = ({navigation}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const route = useRoute();
  const {params} = route as {params: RootStackParamList};
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DocumentData[]>();
  const {follow, image, name, owner, desc, follower} = params;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const streamsQuery = query(
          collection(db, 'streams'),
          orderBy('created_at', 'desc'),
          where('host', '==', owner),
        );
        const querySnapshot = await getDocs(streamsQuery);
        const resultdata = querySnapshot.docs.map(doc => doc.data());
        setResult(resultdata);
      } catch (catchError) {
        console.log('error filtering', catchError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [owner]);

  const tabs = [
    {
      title: 'Music',
      components: <Music />,
    },
    {
      title: 'Streams',
      components: <Streams loading={loading} results={result} />,
    },
    {
      title: 'Collectible',
      components: <Collectible />,
    },
  ];

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
                source={require('../../assets/images/arrow.png')}
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
                source={require('../../assets/images/arrow.png')}
                className="h-[20px] w-[20px]"
              />
            </Pressable>
          </ImageBackground>
        )}

        <ArtistInfo
          isActive={setIsVisible}
          image={image}
          name={name}
          follow={follow}
          desc={desc}
          follower={follower}
        />
        <SelectionTab tabs={tabs} loading={loading} results={result} />
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
              onPress={() =>
                navigation.navigate('MintNft', {
                  image: image,
                  name: name,
                  follow: follow,
                })
              }
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
