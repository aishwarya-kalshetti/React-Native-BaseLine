import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function MediaList({ navigation }: any) {
  const list = [
    { name: 'LocalRemoteImages', screen: 'LocalRemoteImages' },
    { name: 'CachedImage', screen: 'CachedImage' },
    { name: 'VideoPlayer', screen: 'VideoPlayer' },
    { name: 'AnimatedBox', screen: 'AnimatedBox' },
    { name: 'ReanimatedDemo', screen: 'ReanimatedDemo' },
    { name: 'LottieAnimation', screen: 'LottieAnimation' }

  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {list.map(item => (
        <TopicCard key={item.name} title={item.name} onPress={() => navigation.navigate(item.screen)} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingVertical: 12 } });
