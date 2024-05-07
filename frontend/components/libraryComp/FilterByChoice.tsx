import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Iconify} from 'react-native-iconify';
import Dropdown from '../../components/Dropdown';

type Props = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: {
    title: string;
  }[];
};

const FilterByChoice = ({activeTab, setActiveTab, tabs}: Props) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
console.log(isDropdownVisible)
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <View>
      <Pressable
        onPress={toggleDropdown}
        className="flex-row items-center border border-[#787A80] w-[50%] my-5 ml-6 p-3 rounded-[32px]">
        <Text className="text-[#787A80] text-[16px] font-medium">
          Sort by: {activeTab}
        </Text>
        <Iconify icon="mingcute:down-line" size={24} color="#787A80" />
      </Pressable>
      {isDropdownVisible && (
        <Dropdown
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggleDropdown={toggleDropdown}
        />
      )}
    </View>
  );
};

export default FilterByChoice;
