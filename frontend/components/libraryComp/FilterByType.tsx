/* eslint-disable react-native/no-inline-styles */
import {Text, ScrollView, Pressable} from 'react-native';
import React from 'react';

type Props = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: {
    title: string;
  }[];
};

const FilterByType = ({tabs, activeTab, setActiveTab}: Props) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        gap: 8,
        marginLeft: 16,
      }}>
      {tabs.map((item, index) => (
        <Pressable
          onPress={() => setActiveTab(item.title)}
          key={index}
          className={`${
            activeTab === item.title ? 'border-b-2 border-[#FF6D1B]' : ''
          } px-9 py-2.5`}>
          <Text className="text-[#fff] text-[16px] font-medium">
            {item.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default FilterByType;
