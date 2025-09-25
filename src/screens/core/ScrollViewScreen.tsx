import React from 'react';
import { View, Text, ScrollView, StyleSheet ,Image} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<ScrollView><Text>Item 1</Text>...</ScrollView>`;

export default function ScrollViewScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>ScrollView</Text>
      <Text style={styles.theory}>ScrollView for vertical/horizontal scrollable content.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <ScrollView style={{ maxHeight: 120 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Text key={i} style={{ padding: 8 }}>Item {i + 1}</Text>
          ))}
          <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300, borderRadius: 8 }} />
          
        </ScrollView>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
