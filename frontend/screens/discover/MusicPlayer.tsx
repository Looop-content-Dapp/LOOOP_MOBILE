/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {Slider} from '@rneui/themed';

interface MusicDetailsParams {
  title?: string; // Use optional chaining in case 'title' is not always provided
  image: any; // Assuming image is a string representing the image path or URL
  track:
    | {
        title: string;
        artist: string[];
      }[]
    | {
        title: string;
        artist: string[];
        uri: string;
      }[];
  type: string;
  artist: string[];
}

const MusicPlayer = () => {
  const route = useRoute();
  const {goBack, navigate} = useNavigation();
  const {params} = route as {params: MusicDetailsParams};
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const {title, artist, image, track, type} = params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View className="flex-row items-center space-x-[130px] p-9">
        <Pressable onPress={() => goBack()}>
          <Image source={require('../../assets/images/arrow.png')} />
        </Pressable>
        <Text className="text-[#787A80] text-[14px] font-bold">playing</Text>
      </View>

      <View className="items-center mt-[40px]">
        <Image source={image} className="w-[382px] h-[382px]" />
        <View className="flex-row items-center justify-between w-full px-[30px] py-3">
          <View>
            <Text className="text-[#fff] text-[24px]">{title}</Text>
            <Text className="text-[#D2D3D5] text-[18px] font-semibold">
              {artist}
            </Text>
          </View>
          <TouchableOpacity className="border border-[#Fff] p-2 rounded-[32px]">
            <Icon name="heart-outlined" color="white" size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
          }}>
          <Slider
            value={0.5}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FF6D1B" // Front color
            maximumTrackTintColor="#12141B" // Background color
            thumbTintColor="#FF6D1B" // Thumb color
            onValueChange={value => console.log(value)}
            thumbStyle={{
              width: 20,
              height: 20,
            }}
          />
          <View className="flex-row items-center justify-between">
            <Text className="text-[#fff] text-[12px] font-semibold">2:00</Text>
            <Text className="text-[#fff] text-[12px] font-semibold">3:00</Text>
          </View>
        </View>
      </View>

      <View className="py-9">
        <View className="flex-row items-center justify-evenly">
          <Icon name="repeat" color="white" size={24} />
          <Icon name="controller-jump-to-start" color="white" size={24} />
          <Icon name="controller-play" color="white" size={44} />
          <Icon name="controller-next" color="white" size={24} />
          <Icon name="shuffle" color="white" size={24} />
        </View>

        <View className="flex-row items-center px-4 space-x-6 justify-evenly py-12">
          <TouchableOpacity
            onPress={toggleModal}
            className="border-2 border-[#FF6D1B] px-5 py-2.5 flex-row items-center space-x-4 rounded-[32px]">
            <Image source={require('../../assets/images/gift.png')} />
            <Text className="text-[#FF6D1B]">Gift creator</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-[#FFf] px-5 py-2.5 flex-row items-center space-x-4 rounded-[32px]">
            <Icon name="plus" size={24} color="#fff" />
            <Text className="text-[#Fff] text-[16px] font-semibold">
              Add to playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-[#Fff] w-[40px] h-[40px] items-center justify-center rounded-full">
            <Icon name="share" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
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
                <Image source={require('../../assets/images/profileimg.png')} />
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
    </SafeAreaView>
  );
};

export default MusicPlayer;
