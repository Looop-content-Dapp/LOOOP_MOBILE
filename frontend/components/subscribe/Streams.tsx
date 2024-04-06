import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {DocumentData} from 'firebase/firestore';
import StreamCard from './StreamCard';

type Props = {
  loading: boolean;
  results: DocumentData[] | undefined;
};

const Streams = ({loading, results}: Props) => {
  console.log('streams result', results, loading);
  return (
    <View className="items-center space-y-4 mt-5">
      {loading ? (
        <Loader />
      ) : (
        results?.map((stream, index) => (
          <StreamCard key={index} stream={stream} />
        ))
      )}
    </View>
  );
};

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Streams;
