import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function StylingListScreen({ navigation }: any) {
  const list = [
    { name: 'Inline vs StyleSheet', screen: 'InlineVsStyleSheet' },
    { name: 'Flexbox', screen: 'Flexbox' },
    { name: 'Responsive', screen: 'Responsive' },
    { name: 'Platform Specific', screen: 'PlatformSpecific' },
    { name: 'Theming', screen: 'Theming' }
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {list.map(i => <TopicCard key={i.name} title={i.name} onPress={() => navigation.navigate(i.screen)} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingVertical: 12 } });
