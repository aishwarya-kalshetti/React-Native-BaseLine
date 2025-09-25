import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `<Button title="Press me" \nonPress={() => Alert.alert('Button pressed')} \ncolor="midnightblue"\ndisabled />`;

export default function ButtonScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Button</Text>
      <Text style={styles.theory}>Basic cross-platform button.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Button title="Press me" onPress={() => console.log('Button pressed')} 
        color="midnightblue"
         />
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
