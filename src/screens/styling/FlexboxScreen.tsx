import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `// row vs column
<View style={{ flexDirection: 'row' }}></View>`;

export default function FlexboxScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Flexbox</Text>
      <Text style={styles.theory}>Layout with flexDirection, justifyContent, alignItems.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 60, height: 60, backgroundColor: '#fde68a' }} />
          <View style={{ width: 60, height: 60, backgroundColor: '#a7f3d0' }} />
          <View style={{ width: 60, height: 60, backgroundColor: '#bfdbfe' }} />
        </View>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8 }
});
