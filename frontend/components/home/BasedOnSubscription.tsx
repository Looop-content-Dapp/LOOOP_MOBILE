import {View, ScrollView, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {artistsArr} from '../../utils/ArtistArr';

type Props = {
  route: NavigationProp<ParamListBase>;
};
const BasedOnSubscription = ({route}: Props) => {
  return (
    <View className="h-[254px]">
      <Text className="text-[#fff] text-[20px] font-bold">
        Based on artistes you subscribed to
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {artistsArr.map((item, index) => (
          <Pressable
            onPress={() =>
              route.navigate('Home', {
                screen: 'Subscribe',
                params: {
                  image: item.image,
                  name: item.name,
                  follow: item.followers,
                  owner: item.owner,
                  desc: item.description,
                },
              })
            }
            key={index}
            className="items-start">
            <Image
              source={{
                uri: item.image,
              }}
              className="w-[140px] h-[140px] m-[8px] rounded-full bg-white"
            />
            <View>
              <Text className="text-[#fff] font-bold text-[14px]">
                {item.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default BasedOnSubscription;
