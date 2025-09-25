import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function NavigationListScreen({ navigation }: any) {
  const list = [
    { name: 'Basics', screen: 'NavBasics' },
    { name: 'Stack Demo', screen: 'StackDemo' },
    { name: 'Bottom Tabs Demo', screen: 'BottomTabsDemo' },
    { name: 'Drawer Demo', screen: 'DrawerDemo' },
    { name: 'Passing Data', screen: 'PassingData' }
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {list.map(i => <TopicCard key={i.name} title={i.name} onPress={() => navigation.navigate(i.screen)} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingVertical: 12 } });
