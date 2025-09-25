import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const Stack=createNativeStackNavigator();

const message =  'Helllo from PAssing Data Screen';

const example=`export default function PassingDataScreen({ navigation }: any) {
 return (
    <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Passing Data</Text>
        <Text style={{ marginTop: 12 }}>Received: {String(message)}</Text>
       </View>
);
}

`;
export default function PassingDataScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding:12 }}>
      <Text style={styles.title}>Passing Data Screen</Text>
      <Text style={styles.theory}>`You can pass parameters while navigating using navigation.navigate("Screen", parameter). On the next screen, you retrieve it with route.params.paramName. This is useful for sending user input or item details across screens. </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Passing Data</Text>
        <Text style={{ marginTop: 12 }}>Received: {String(message)}</Text>
       </View>
        
        
        
      </DemoBox>
    </View>
  );
}
const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});



