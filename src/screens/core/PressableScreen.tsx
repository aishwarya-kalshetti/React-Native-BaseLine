import React from 'react';
import { View, Text, Button, StyleSheet, Alert,Image ,Pressable} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';
import { ScrollView } from 'react-native-gesture-handler';

const example = `<Button title="Press me" \nonPress={() => console.log('Button pressed')}\ncolor="midnightblue"/>\n

    <Pressable onPress={() => console.log("Image Pressed")}>\n
    <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300, borderRadius: 8 }} />\n
    </Pressable>

    <Pressable onPress={() => console.log("Text Pressed")}>\n
    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at asperiores cumque, fugit facere ullam sequi illo blanditiis possimus numquam minus facilis reiciendis officiis! Et nihil facilis qui labore quam.</Text>\n
    </Pressable>`;

export default function PressableScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Pressable</Text>
      <Text style={styles.theory}>Preaable is a wrapper component that detects various stages of press interactions on its defined childern.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        
        <Button title="Press me" onPress={() => console.log('Button pressed')} 
        color="midnightblue"/>

        <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={{ uri: 'https://picsum.photos/150' }} style={{ width: 100, height: 100, borderRadius: 8 }} />
        </Pressable>

        <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at asperiores cumque, fugit facere ullam sequi illo blanditiis possimus numquam minus facilis reiciendis officiis! Et nihil facilis qui labore quam.</Text>
        </Pressable>
        
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
});
