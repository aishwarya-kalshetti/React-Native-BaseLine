import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `Platform.OS === 'ios' ? ... : ...`;

export default function PlatformSpecificScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Platform-specific styling</Text>
      <Text style={styles.theory}>Platform.OS or Platform.select helps distinguish styles.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Text>Running on: {Platform.OS}</Text>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8 }
});
