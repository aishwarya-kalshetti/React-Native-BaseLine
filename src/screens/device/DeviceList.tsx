import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicCard from '../../components/TopicCard';

export default function DeviceList({ navigation }: any) {
  const list = [
    { name: 'CameraPicker', screen: 'CameraPicker' },
    { name: 'LocationMap', screen: 'LocationMap' },
    { name: 'Notifications', screen: 'Notifications' },
    { name: 'VibrationHaptics', screen: 'VibrationHaptics' },
    { name: 'PermissionsHandler', screen: 'PermissionsHandler' }
    
   
    
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
