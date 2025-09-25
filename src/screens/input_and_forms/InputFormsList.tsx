import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function InputFormsList({ navigation }: any) {
  const list = [
    { name: 'TextInput', screen: 'TextInput' },
    {name:'LoginForm' , screen:'LoginForm'}

  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {list.map(i => <TopicCard key={i.name} title={i.name} onPress={() => navigation.navigate(i.screen)} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ container: { paddingVertical: 12 } });
