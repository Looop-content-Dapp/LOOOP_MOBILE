/* eslint-disable prettier/prettier */
import {View, ScrollView, Text, Image} from 'react-native';
import React from 'react';

const FilterByMomments = () => {
  const monments = [
    {
      color: '#929DFF',
      moments: 'Chill',
      image: require('../../assets/images/calm.png'),
    },
    {
      color: '#FFAE35',
      moments: 'Energy',
      image: require('../../assets/images/energy.png'),
    },
    {
      color: '#FF668B',
      moments: 'Romance',
      image: require('../../assets/images/love.png'),
    },
    {
      color: '#643EFF',
      moments: 'Workout',
      image: require('../../assets/images/gym.png'),
    },
    {
      color: '#BD68FF',
      moments: 'Chill',
      image: require('../../assets/images/calm.png'),
    },
  ];
  return (
    <View className="h-[149px]">
      <Text className="text-[#fff] text-[18px]">Based on my mood</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {monments.map((item, index) => (
          <View key={index} className="items-center">
            <View
              className="w-[83px] h-[83px] m-[8px] rounded-[15px] items-center justify-center"
              style={{
                backgroundColor: item.color,
              }}>
              <Image source={item.image} className="w-[50px] h-[50px]" />
            </View>
            <Text className="text-[#fff]">{item.moments}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterByMomments;
