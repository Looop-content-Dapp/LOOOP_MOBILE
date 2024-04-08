import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Artist} from '../../GiftCreatorModal';
import {Image} from 'react-native';
import {formatNumber} from '../../../utils/ArtistArr';

type Props = {
  selected: Artist | null;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
};

const SelectedOption = ({selected, setAmount}: Props) => {
  return (
    <View className="h-[194px] space-y-4 my-4">
      <View className="items-center">
        <Image
          source={{
            uri: selected?.image,
          }}
          className="w-[72px] h-[72px] rounded-[72px]"
        />
        <Text className="text-[16px] font-medium text-[#ffffff]">
          {selected?.name}
        </Text>
        <View className="flex-row items-center space-x-4">
          <Text className="text-[12px] font-medium text-[#ffffff]">
            {formatNumber(selected?.followers ?? 0)} Followers
          </Text>
          <Text className="text-[12px] font-medium text-[#ffffff]">
            {formatNumber(selected?.following ?? 0)} Subscribers
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          onChangeText={text => setAmount(parseInt(text, 10))}
          keyboardType="number-pad"
          className="h-[64px] bg-[#0A0B0F] text-[#fff] border border-[#787A80] rounded-[15px]"
        />
        <Text className="self-end text-[12px] font-medium text-[#787A80]">
          Available balance: 5,000 LOOOP
        </Text>
      </View>
    </View>
  );
};

export default SelectedOption;
