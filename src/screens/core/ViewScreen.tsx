import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<View style={{ padding: 10, backgroundColor: '#eee' }}>
  <Text>Hello inside a View</Text>
</View>`;

export default function ViewScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>View</Text>
      <Text style={styles.theory}>A container that supports layout with Flexbox, style, and touch handling.</Text>

      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.demo}>
          <Text>(I'm inside a View with padding & background)</Text>
          <View style={{ padding: 10, backgroundColor: '#eee' }}>
          <Text>Hello inside a View</Text>
          </View>
        </View>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  demo: { padding: 12, backgroundColor: '#f3f4f6', borderRadius: 6 }
});
