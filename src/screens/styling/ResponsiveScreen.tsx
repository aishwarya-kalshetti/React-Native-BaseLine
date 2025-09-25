import React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `const { width, height } = useWindowDimensions();`;

export default function ResponsiveScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Responsive (useWindowDimensions)</Text>
      <Text style={styles.theory}>Use device width/height for responsive layout.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Text>Screen width: {Math.round(width)} px</Text>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8 }
});
