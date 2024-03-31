/* eslint-disable prettier/prettier */
import { View, ScrollView, Text } from 'react-native';
import React from 'react';

const FilterByMomments = () => {
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
<View className="h-[149px]">
    <Text className="text-[#fff] text-[18px]">Based on my mood</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {monments.map((item, index) => (
       <View key={index} className="items-center">
         <View className="w-[83px] h-[83px] m-[8px] rounded-[15px]" style={{
            backgroundColor: item.color,
        }} />
        <Text className="text-[#fff]">{item.moments}</Text>
       </View>
      ))}
    </ScrollView>
</View>
  );
};

export default FilterByMomments;
