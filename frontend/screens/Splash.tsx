import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {SubscribeProps} from '../export';

const Splash = ({navigation}: SubscribeProps) => {
  const fadeAnim1 = useRef(new Animated.Value(1)).current; // Initial value for opacity: 1
  const fadeAnim2 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 0,
        duration: 1000, // Duration of the fade out animation
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000, // Duration of the fade in animation
        useNativeDriver: true,
      }),
      Animated.delay(1000), // Wait for 1 second before navigating
    ]).start(() => {
      navigation.navigate('Onboard'); // Navigate to the Onboard screen
    });
  }, [fadeAnim1, fadeAnim2, navigation]);

  return (
    <View className="flex-1 bg-[#0A0B0F] min-h-screen justify-center items-center">
      <Animated.Image
        source={require('../assets/images/splash.png')}
        style={{opacity: fadeAnim1}}
      />
      <Animated.Image
        source={require('../assets/images/splash2.png')}
        style={{opacity: fadeAnim2}}
        className="mb-9"
      />
      <Animated.Text
        style={[
          {
            opacity: fadeAnim2, // Bind opacity to animated value of the second image
          },
        ]}
        className="text-[#fff] text-[16px] font-medium">
        share • connect • earn
      </Animated.Text>
    </View>
  );
};

export default Splash;
