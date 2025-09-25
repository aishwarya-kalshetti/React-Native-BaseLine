import React from 'react';
import { View, Text, Button, StyleSheet, Alert,Image ,Modal} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';
import { ScrollView } from 'react-native-gesture-handler';
import {useState} from "react";
const example = `const [isModalVisible, setIsModalVisible]=useState(false);\n<Button title="Press me" onPress={() => setIsModalVisible(true)} \n
        color="midnightblue"/>\n

        <Modal>\n
            <View style={{flex:1, backgroundColor:"lightblue" , padding:60}}></View>\n
            <Text>Modal content</Text>\n
            <Button title="close" color="midnightblue" onPress={() => setIsModalVisible(false)} />\n
        </Modal>`;

export default function ModalScreen() {
    const [isModalVisible, setIsModalVisible]=useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.theory}>Modal is a screen that overlays the app content to provide important information or prompt the user for a decision(used only when necessary)</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={{flex:1, backgroundColor:"plum", padding:60}}>
        <Button title="Press me" onPress={() => setIsModalVisible(true)} 
        color="midnightblue"/>

        <Modal visible={isModalVisible}>
            <View style={{flex:1, backgroundColor:"lightblue" , padding:60}}>
            <Text>Modal content</Text>
            <Button title="close" color="midnightblue" onPress={() => setIsModalVisible(false)} />
            </View>
        </Modal>
        </View>
        
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
