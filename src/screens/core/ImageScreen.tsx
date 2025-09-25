import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300 }} />`;

export default function ImageScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Image</Text>
      <Text style={styles.theory}>Displays images from network/local sources.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300, borderRadius: 8 }} />
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
