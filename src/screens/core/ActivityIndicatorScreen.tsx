import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<ActivityIndicator size="large" \n<ActivityIndicator size="small" \n<ActivityIndicator size="large" color="midnightlbue"/> `;

export default function ActivityIndicatorScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Text style={styles.theory}>Shows a loading spinner.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" />
        <ActivityIndicator size="large" color="midnightblue" />
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
