import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';


const Drawer = createDrawerNavigator();
function Home() {
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Drawer Home</Text></View>);
}
function Settings() {
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Drawer Settings</Text></View>);
}

const example=`
export default function DrawerDemoScreen() {
  return (
  <View>
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  </View>
);
}
`;
export default function DrawerDemoScreen() {
  return (
    <View style={{ flex: 1, padding:12 }}>
    
        
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
   
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
