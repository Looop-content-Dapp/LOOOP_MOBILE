import FilterByType from '../../components/libraryComp/FilterByType';
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import FilterByChoice from '../../components/libraryComp/FilterByChoice';
import MusicControl from '../../components/MusicControl';

const Library = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeDropdown, setActiveDropdown] = useState('Recently Played');

  const tabs = [
    {
      title: 'All',
    },
    {
      title: 'Albums',
    },
    {
      title: 'Playlist',
    },
    {
      title: 'Favourite',
    },
    {
      title: 'Top Songs',
    },
  ];

  const select = [
    {
      title: 'Recently Played',
    },
    {
      title: 'Most Popular',
    },
    {
      title: 'Most Played',
    },
  ];
  return (
    <View className="flex-1 min-h-screen">
      <View>
        <FilterByType
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <FilterByChoice
          tabs={select}
          activeTab={activeDropdown}
          setActiveTab={setActiveDropdown}
        />
      </View>

      <View
        className="absolute bottom-[150px] right-0 h-[72px] items-center justify-center z-50 ">
        <MusicControl />
      </View>
    </View>
  );
};

export default Library;
