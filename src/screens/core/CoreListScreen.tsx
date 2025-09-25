import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function CoreListScreen({ navigation }: any) {
  const list = [
    { name: 'View', screen: 'View' },
    { name: 'Text', screen: 'Text' },
    { name: 'Image', screen: 'Image' },
    { name: 'ScrollView', screen: 'ScrollView' },
    
    { name: 'Button', screen: 'Button' },
     { name: 'Pressable', screen: 'Pressable' },
     { name: 'Modal', screen: 'Modal' },
     { name: 'StatusBar', screen: 'StatusBar' },
    { name: 'ActivityIndicator', screen: 'ActivityIndicator' },
    { name: 'Table', screen: 'Table'},
    {name: 'SearchBar' , screen: 'SearchBar'},
    {name:'ProgressBar', screen:'ProgressBar'},
    {name:'Avatar', screen:'Avatar'},
    {name:'List', screen:'List'},
    {name:'FlatList', screen:'FlatList'},
    {name:'SectionList', screen:'SectionList'}
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
