/* eslint-disable prettier/prettier */
import { View, ScrollView, Text } from 'react-native';
import React from 'react';

const NewStuff = () => {
    const monments = [
        {
            color: '#643EFF',
            moments: 'Chill',
        },
        {
            color: '#929DFF',
            moments: 'Energy',
        },
        {
            color: '#BD68FF',
            moments: 'Romance',
        },
        {
            color: '#FF668B',
            moments: 'Workout',
        },
        {
            color: '#FFAE35',
            moments: 'Chill',
        },
    ];
  return (
<View className="h-[254px] mt-3">
    <Text className="text-[#fff] text-[18px]">New on the block</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {monments.map((item, index) => (
       <View key={index} className="items-start">
         <View className="w-[140px] h-[140px] m-[8px] rounded-[15px]" style={{
            backgroundColor: item.color,
        }} />
       <View className="w-[140px] px-4">
       <Text className="text-[#fff]">{item.moments}</Text>
       <Text className="text-[#fff]">{item.moments}</Text>
       </View>
       </View>
      ))}
    </ScrollView>
</View>
  );
};

export default NewStuff;
