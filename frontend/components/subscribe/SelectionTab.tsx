/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Music from './Music';
import Streams from './Streams';
import Collectible from './Collectible';
import { DocumentData } from 'firebase/firestore';

type Props = {
  tabs: {
    title: string;
    components: React.JSX.Element;
  }[];
  loading: boolean;
  results: DocumentData[] | undefined;
};

const SelectionTab = ({tabs, loading, results}: Props) => {
  const [active, setActive] = useState('Music');
  return (
    <View className="w-[100%]">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 8,
        }}>
        {tabs.map((item, index) => (
          <View key={index}>
            <Pressable
              onPress={() => setActive(item.title)}
              className={`${
                active === item.title
                  ? 'border-b-2 border-[#FF6D1B] w-[100px] pb-3'
                  : 'border-none'
              } w-[130px] py-2.5`}>
              <Text className="text-[#fff] text-center">{item.title}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      {active === 'Music' && <Music />}
      {active === 'Streams' && <Streams loading={loading} results={results}/>}
      {active === 'Collectible' && <Collectible />}
    </View>
  );
};

export default SelectionTab;
