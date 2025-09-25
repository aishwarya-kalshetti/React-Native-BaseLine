import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<Text style={{ fontSize: 18, color: '#222' }}>
<Text> This is a simple Text</Text>
\n<Text> Welcome to React Native Tutorial By Aishwarya..</Text></Text>`;

export default function TextScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Text</Text>
      <Text style={styles.theory}>Displays text. Supports nesting and styling.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Text style={{ fontSize: 18 }}>
          <Text> This is a simple Text</Text>
          <Text> Welcome to React Native Tutorial By Aishwarya..</Text>
          </Text>

      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
