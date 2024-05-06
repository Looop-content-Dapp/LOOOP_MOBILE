import React from 'react';
import {View, Text, Pressable} from 'react-native';

type DropdownProps = {
  tabs: {title: string}[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  toggleDropdown: () => void;
};

const Dropdown = ({tabs, setActiveTab, toggleDropdown}: DropdownProps) => {
  return (
    <View className="bg-[#787A80] px-2 py-4 space-y-5 w-[40%] absolute top-[60px] right-[180px]">
      {tabs.map((tab, index) => (
        <Pressable
          key={index}
          onPress={() => {
            setActiveTab(tab.title);
            toggleDropdown();
          }}>
          <Text className="text-[16px] font-medium text-[#fff] border-b pb-5">{tab.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Dropdown;
