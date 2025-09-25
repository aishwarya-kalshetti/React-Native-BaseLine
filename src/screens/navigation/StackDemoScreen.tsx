import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';
const Stack=createNativeStackNavigator();
const example=`export default function StackDemoScreen({ navigation }: any) {
 return (
    <Text style={{ fontSize: 20, fontWeight: '700' }}>Stack Demo</Text>
    <Text style={{ marginVertical: 8 }}>This demonstrates navigating to a second screen in the stack.</Text>
    <Button title="Go to Details" onPress={() => navigation.push('PassingData', { message: 'Hello from StackDemo' })} />
);
}

`;
export default function StackDemoScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding:12 }}>
      <Text style={styles.title}>Stack Navigation</Text>
      <Text style={styles.theory}>Stack Navigator organizes screens in a stack (like a pile of cards). Users can push a new screen on top or go back to the previous one. It’s commonly used for flows like login → home → details. </Text>
      <CodeBlock code={example} />
      <DemoBox>
         <Text style={{ fontSize: 20, fontWeight: '700' }}>Stack Demo</Text>
         <Text style={{ marginVertical: 8 }}>This demonstrates navigating to a second screen in the stack.</Text>
         <Button title="Go to Details" onPress={() => navigation.push('PassingData', { message: 'Hello from StackDemo' })} />
        
        
        
      </DemoBox>
    </View>
  );
}
const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
