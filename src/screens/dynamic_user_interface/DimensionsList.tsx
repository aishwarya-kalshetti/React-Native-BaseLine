import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function DimensionsList({ navigation }: any) {
  const list = [
    { name: 'Dimention API', screen: 'DimentionsAPI' },
    { name: 'Use Window Dimension', screen: 'UseWindowDimension'},
    { name: 'Safe Area View', screen: 'SafeAreaView'},
    { name: 'Switch API', screen: 'SwitchAPI'},
    { name: 'Alert API', screen: 'AlertAPI'},
    {name: 'Axios', screen: 'Axios'},
    {name: 'JSON Handling', screen: 'JsonAPI'}


  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {list.map(i => <TopicCard key={i.name} title={i.name} onPress={() => navigation.navigate(i.screen)} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingVertical: 12 } });
