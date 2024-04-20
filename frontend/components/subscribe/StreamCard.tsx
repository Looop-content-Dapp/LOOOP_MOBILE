import {View, Text, Pressable, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useMeeting} from '../../context/StreamContext';
import {DocumentData} from 'firebase/firestore';

type Props = {
  stream: DocumentData;
};

const StreamCard = ({stream}: Props) => {
  const {navigate} = useNavigation();
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  let description = stream.description;
  return (
    <View className="w-[391px] bg-[#12141B] h-[179px] p-2.5 rounded-[15px]">
      <View>
        <View className="flex-row items-start space-x-2">
          <Image
            source={{
              uri: stream.image,
            }}
            className="w-[64px] h-[64px] rounded-[10px]"
          />
          <View className="px-4">
            <View className="flex-row items-center space-x-3">
              <Text className="text-[16px] font-bold text-[#fff]">
                {stream.title}
              </Text>
              <Pressable className="bg-[#FF2222] px-4 py-2 rounded-[48px]">
                <Text className="text-[#fff] font-semibold text-[12px]">
                  Live
                </Text>
              </Pressable>
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              className="text-[#A5A6AA] text-[12px] w-[270px]">
              {truncateText(description, 200)}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-4 p-2">
          <Text className="flex-row items-center text-[12px] text-[#A5A6AA] font-semibold">
            <Icon name="sound" type="antdesign" size={10} color="white" />
            123,678 Listening
          </Text>
          <Text className="flex-row items-center w-full text-[12px] text-[#A5A6AA] font-semibold">
            <Icon
              name="clockcircleo"
              type="antdesign"
              size={12}
              color="white"
            />
            on for <Text className="text-[#2DD881]">1h:20m:30s</Text>
          </Text>
        </View>
      </View>
      <View className="flex-row items-start justify-between px-4">
        <Pressable className="border border-[#A94FB4] px-2 py-2 rounded-[48px]">
          <Text className="text-[14px] text-[#A94FB4]">Subscriber event</Text>
        </Pressable>
        <TouchableOpacity
          onPress={() =>
            navigate('StreamPage', {
              roomId: stream?.meeting_id,
              image: stream?.image,
              desc: stream?.description,
              title: stream.title,
              name: stream.name
            })
          }
          className="bg-[#2DD881] px-6 py-2.5 rounded-[48px]">
          <Text className="text-[14px] font-medium">Join stream</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StreamCard;
