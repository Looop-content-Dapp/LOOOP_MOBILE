import {View, Text, Image} from 'react-native';
import React from 'react';
import {Artist} from '../../GiftCreatorModal';

type Props = {
  selected: Artist | null;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
};

const Congrat = ({amount, selected, setAmount}: Props) => {
  return (
    <View className="items-center space-y-[16px]">
      <Text className="text-[16px] font-medium text-[#ffffff]">
        You gifted this creator {amount} Looop
      </Text>
      <View className="items-center space-y-[8px]">
        <Image
          source={{
            uri: selected?.image,
          }}
          className="w-[72px] h-[72px] rounded-[72px]"
        />
        <Text className="text-[20px] font-medium text-[#ffffff]">
          {selected?.name}
        </Text>
      </View>
    </View>
  );
};

export default Congrat;
