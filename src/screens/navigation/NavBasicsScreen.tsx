import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const Stack=createNativeStackNavigator();

const example=`Install react-navigation and wrap app in NavigationContainer.

`;
export default function NavBasicsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding:12 }}>
      <Text style={styles.title}>Navigation Basics</Text>
      <Text style={styles.theory}>`Navigation in React Native lets users move between different screens of an app. Using React Navigation, you can create a stack of screens and switch between them smoothly. It’s the foundation for building multi-screen apps.`
      </Text>
      <CodeBlock code={example} />
      <DemoBox>
         <Text>RootNavigator uses a Stack and links to demos.</Text>
        
        
        
      </DemoBox>
    </View>
  );
}
const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});






