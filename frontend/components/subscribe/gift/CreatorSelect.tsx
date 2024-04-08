import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {formatNumber} from '../../../utils/ArtistArr';
import {Artist} from '../../GiftCreatorModal';

type Props = {
  filteredArtists: Artist[];
  setSelected: React.Dispatch<React.SetStateAction<Artist | null>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: 0;
};

const CreatorSelect = ({
  filteredArtists,
  setSelected,
  current,
  setCurrent,
}: Props) => {
  const handleSelect = (item: Artist) => {
    setSelected(item);
    setCurrent(current + 1);
  };
  return (
    <View className="h-[194px] space-y-4 my-4">
      <Text className="text-[14px] text-[#fff] font-medium">
        Choose creator/Collaborator
      </Text>
      <View className="space-y-4">
        {filteredArtists.map((item, index) => (
          <Pressable
            onPress={() => handleSelect(item)}
            key={index}
            className="flex-row items-center space-x-4">
            <Image
              source={{
                uri: item.image,
              }}
              className="w-[72px] h-[72px] rounded-[72px]"
            />
            <View className="items-start">
              <Text className="text-[16px] font-medium text-[#ffffff]">
                {item.name}
              </Text>
              <View className="flex-row items-center space-x-4">
                <Text className="text-[12px] font-medium text-[#ffffff]">
                  {formatNumber(item.followers)} Followers
                </Text>
                <Text className="text-[12px] font-medium text-[#ffffff]">
                  {formatNumber(item.following)} Subscribers
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CreatorSelect;
