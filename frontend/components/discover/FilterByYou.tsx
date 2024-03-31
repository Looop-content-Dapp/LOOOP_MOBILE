/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { ScrollView, Image, View } from 'react-native';
import React from 'react';

const FilterByYou = () => {
    const FilterOption = [
        {
            image: require('../../assets/images/Frame1.png'),
        },
        {
            image: require('../../assets/images/Frame2.png'),
        },
    ];
  return (
  <View className="h-[110px]">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={{ width: '100%' }}>
      {FilterOption.map((item, index) => (
        <Image key={index} source={item.image} className="m-[8px] w-[183px] h-[100px]"  />
      ))}
    </ScrollView>
  </View>
  );
};

export default FilterByYou;
