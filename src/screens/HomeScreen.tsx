import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../components/TopicCard';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>React Native Study</Text>

      <TopicCard title="1. Core Components" onPress={() => navigation.navigate('CoreList')} />
      <TopicCard title="2. Styling" onPress={() => navigation.navigate('StylingList')} />
      <TopicCard title="3. Navigation" onPress={() => navigation.navigate('NavigationList')} />
      <TopicCard title="4. Dynamic User Interface" onPress={() => navigation.navigate('DimensionsList')} />
      <TopicCard title="5. Input and Forms" onPress={() => navigation.navigate('InputFormsList')} />
      <TopicCard title="6. Device Components" onPress={() => navigation.navigate('DeviceList')} />
      <TopicCard title="7. Media Inputs" onPress={() => navigation.navigate('MediaList')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  heading: { fontSize: 22, fontWeight: '700', padding: 12 }
});
