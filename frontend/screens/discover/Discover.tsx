/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '../../components/discover';
import FilterByYou from '../../components/discover/FilterByYou';
import FilterByMomments from '../../components/discover/FilterByMomments';
import NewStuff from '../../components/discover/NewStuff';
import BasedOnFav from '../../components/discover/BasedOnFav';
import {SubscribeProps} from '../../export';

const Discover = ({navigation}: SubscribeProps) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', minHeight: '100%', padding: 9}}>
      <Input route={navigation} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 9,
          paddingVertical: 16,
        }}>
        <FilterByYou />
        <FilterByMomments />
        <NewStuff />
        <BasedOnFav route={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
