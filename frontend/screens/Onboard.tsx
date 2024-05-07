/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SubscribeProps} from '../export';

const {width} = Dimensions.get('window');

const onboard = [
  {
    image: require('../assets/images/onboard1.png'),
    title: 'Welcome to Looop',
    description: 'Built for the creators, Built for the fans',
  },
  {
    image: require('../assets/images/onboard2.png'), // Assuming you have different images for each screen
    title: 'Discover Music',
    description: 'Explore new music and artists',
  },
  // {
  //   image: require('../assets/images/onboard3.png'), // Assuming you have different images for each screen
  //   title: 'Create Playlists',
  //   description: 'Save your favorite tracks and share them with friends',
  // },
];

const Onboard = ({navigation}: SubscribeProps) => {
  // const {navigate} = useNavigation();
  const renderItem = ({item}: any) => (
    <View className="min-h-screen w-[100vw] items-center justify-center ">
      <Image source={item.image} className={'w-[214px] h-[200px]'} />
      <Text className={'text-white text-2xl mt-4'}>{item.title}</Text>
      <Text className={'text-white text-lg mt-2'}>{item.description}</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {onboard.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const color = scrollX.interpolate({
            inputRange,
            outputRange: ['#808080', '#4169E1', '#808080'],
            extrapolate: 'clamp',
          });
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10], // change the width here
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                height: 10,
                width: dotWidth,
                borderRadius: 5,
                backgroundColor: color,
                margin: 10,
              }}
            />
          );
        })}
      </View>
    </View>
  );

  // const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = new Animated.Value(0);

  // const handleScroll = Animated.event(
  //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
  //   {useNativeDriver: false},
  // );

  const flatListRef = useRef<FlatList>(null);

  // const handleNext = () => {
  //   const nextIndex = currentIndex + 1;
  //   console.log(nextIndex);
  //   if (nextIndex < onboard.length) {
  //     // Only proceed to the next slide if it exists
  //     // You can update currentIndex or perform any other action
  //     setCurrentIndex(nextIndex);
  //     // Scroll to the next index
  //     flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
  //   } else {
  //     // Handle reaching the end of the onboarding slides
  //     // You can navigate to the next screen or perform any other action
  //     // navigate('/(auth)');
  //   }
  // };

  // const handleSkip = () => {
  //   const lastIndex = pagesData.length - 1;
  //   setCurrentIndex(lastIndex);
  //   if (flatListRef.current !== null) {
  //     flatListRef.current.scrollToIndex({index: lastIndex, animated: true});
  //   }
  // };

  return (
    <View className="bg-[#0A0B0F] flex-1">
      <FlatList
        data={onboard}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        className={'flex-1'}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        ref={flatListRef}
      />

      <View className="items-center mb-4 space-y-6">
        <Text className="text-[16px] text-[#fff] font-medium">
          Sign in to Looop
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('connectWallet')}
          className="bg-[#FF6D1B] h-[60px] w-[90%] items-center justify-center rounded-[48px]">
          <Text className="text-[16px] text-[#fff] font-medium">
            Connect Wallet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard;
