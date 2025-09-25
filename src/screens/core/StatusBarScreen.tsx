import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';
import { ScrollView } from 'react-native-gesture-handler';

const example = ``;

export default function PressableScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Status Bar</Text>
      <Text style={styles.theory}>Status Bar Component allows you to control the applications status bar </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={{flex:1, backgroundColor:"plum", padding:60}}>
            <StatusBar backgroundColor="lightgreen" barStyle="light-content"/>
        </View>
        
        
        
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
