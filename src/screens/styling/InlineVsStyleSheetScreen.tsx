import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `// Inline
<Text style={{ color: 'red' }}>hi</Text>
// StyleSheet
const styles = StyleSheet.create({\ncontainer: {flex:1,backgroundColor:"plum",padding:60}\nlightblue:{backgroundColor:"lightblue", width:100,height:100,padding:10},\n
lightgreen:{backgroundColor:"lightgreen", width:100,height:100,padding:10}\n
})});`;

export default function InlineVsStyleSheetScreen() {
  return (
    

    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Inline vs StyleSheet.create()</Text>
      <Text style={styles.theory}>Inline styles are quick; StyleSheet.create optimizes references.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <Text style={{ color: 'tomato' }}>Inline styled</Text>
        <View style={stylesheet.container}>
          <View style={[stylesheet.lightblue,stylesheet.boxShadow]}>
            <Text>Light Blue</Text>
          </View>
          <View style={[stylesheet.lightgreen, stylesheet.boxShadow]}>
              <Text>LightGreen</Text>
          </View>
        </View>
      </DemoBox>
    </View>
  );
}
  const stylesheet=StyleSheet.create({
    container: {flex:1,backgroundColor:"plum",padding:60},
    lightblue:{backgroundColor:"lightblue", width:100,height:100,padding:10,marginVertical:10, borderColor:"white"},
    lightgreen:{backgroundColor:"lightgreen", width:100,height:100,padding:10},
    boxShadow:{shadowColor: "#33333", shadowOffset: {width:6,height:6}, shadowOpacity:0.3}
})


const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8 },
  text: { color: 'tomato', marginTop: 8 }
});
