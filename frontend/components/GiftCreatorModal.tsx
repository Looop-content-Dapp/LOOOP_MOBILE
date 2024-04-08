/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {artistsArr} from '../utils/ArtistArr';
import CreatorSelect from './subscribe/gift/CreatorSelect';
import SelectedOption from './subscribe/gift/SelectedOption';
import Congrat from './subscribe/gift/Congrat';

export interface Artist {
  name: string;
  owner: string;
  description: string;
  image: string;
  external_url: string;
  attributes: {trait_type: string; value: string}[];
  properties: {
    creation_date: string;
    edition: {total: number; current: number};
    royalties: {
      /* define the structure here */
    };
  };
  followers: number;
  following: number;
  external_links: {
    /* define the structure here */
  }[];
}

interface GiftCreatorModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
  artist: string[];
}

const GiftCreatorModal: React.FC<GiftCreatorModalProps> = ({
  modalVisible,
  toggleModal,
  artist,
}) => {
  // State for filtered artists
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Artist | null>(null);
  const [amount, setAmount] = useState(0.0);
  console.log('filtered', current);

  useEffect(() => {
    // Filtering the artists array based on multiple names
    const filtered = artistsArr.filter(item =>
      artist.some(name => item.name.includes(name)),
    );
    setFilteredArtists(filtered);
  }, [artist]);

  const handleChange = () => {
    switch (current) {
      case 0:
        return (
          <CreatorSelect
            filteredArtists={filteredArtists}
            setSelected={setSelected}
            setCurrent={setCurrent}
            current={current}
          />
        );
      case 1:
        return (
          <SelectedOption
            selected={selected}
            setAmount={setAmount}
            amount={amount}
          />
        );
      case 2:
        return (
          <Congrat selected={selected} setAmount={setAmount} amount={amount} />
        );
      default:
        break;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          className="p-9"
          style={{
            backgroundColor: '#12141B',
            padding: 20,
            borderRadius: 30,
            width: 382,
            height: 'auto',
          }}>
          {current < 2 && (
            <>
              <View className="space-y-[16px]">
                <Text className="text-[#fff] font-bold text-[24px]">
                  Gift Creator
                </Text>
                <Text className="text-[14px] text-[#fff] font-semibold">
                  You can now gift your favorite creators with Loop tokens
                </Text>
                <Pressable className="border border-[#fff] w-[121px] h-[48px] rounded-[32px] flex-row items-center justify-evenly">
                  <Image source={require('../assets/images/profileimg.png')} />
                  <Text className="text-[#fff] font-medium text-[16px]">
                    5000
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          {handleChange()}
          {current < 2 && (
            <TouchableOpacity
              disabled={!amount}
              onPress={() => setCurrent(current + 1)}
              className="bg-[#FF6D1B] items-center my-6 py-4 rounded-[56px]">
              <Text className="text-[#fff] font-medium text-[16px]">
                Continue
              </Text>
            </TouchableOpacity>
          )}
          {current === 2 && (
            <TouchableOpacity
              onPress={toggleModal}
              className="bg-[#FF6D1B] items-center my-6 py-4 rounded-[56px]">
              <Text className="text-[#fff] font-medium text-[16px]">
                Back to Music
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default GiftCreatorModal;
