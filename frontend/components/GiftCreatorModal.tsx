/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

interface GiftCreatorModalProps {
  modalVisible: boolean;
  toggleModal: () => void;
}

const GiftCreatorModal: React.FC<GiftCreatorModalProps> = ({
  modalVisible,
  toggleModal,
}) => {
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
            borderRadius: 10,
            width: 382,
            height: 'auto',
          }}>
          <View className="space-y-[16px]">
            <Text className="text-[#fff] font-bold text-[24px]">
              Gift Creator
            </Text>
            <Text className="text-[14px] text-[#fff] semibold">
              You can now gift your favorite creators with Loop tokens
            </Text>
            <Pressable className="border border-[#fff] w-[90px] py-2.5 rounded-[32px] flex-row items-center justify-center">
              <Image source={require('../assets/images/profileimg.png')} />
              <Text className="text-[#fff]">5000</Text>
            </Pressable>
          </View>
          <View className="">
            <Text>Choose creator/Collaborator</Text>
          </View>
          <TouchableOpacity
            onPress={toggleModal}
            style={{alignSelf: 'flex-end'}}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GiftCreatorModal;
