import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function A() {
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Tab A</Text></View>);
}
function B() {
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Tab B</Text></View>);
}

export default function BottomTabsDemoScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabA" component={A} />
      <Tab.Screen name="TabB" component={B} />
    </Tab.Navigator>
  );
}
