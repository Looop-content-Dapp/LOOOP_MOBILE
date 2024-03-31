/* eslint-disable prettier/prettier */
import { View, ScrollView, Text } from 'react-native';
import React from 'react';

const BasedOnFav = () => {
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
<View className="h-[254px]">
    <Text className="text-[#fff] text-[18px]">Based on artistes you subscribed to</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {monments.map((item, index) => (
       <View key={index} className="items-start">
         <View className="w-[140px] h-[140px] m-[8px] rounded-full" style={{
            backgroundColor: item.color,
        }} />
       </View>
      ))}
    </ScrollView>
</View>
  );
};

export default BasedOnFav;
