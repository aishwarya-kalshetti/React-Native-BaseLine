import React from 'react';
import { View, Text, StyleSheet ,Dimensions} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `export default function DimentionsAPI() {\n
  return (\n
    <View style={{ flex: 1 }}>\n
      <Text style={styles.title}>Dimensions API</Text>\n
      <Text style={styles.theory}></Text>\n
      <CodeBlock code={example} />\n
      <DemoBox>\n
        <View style={styles.container}>\n
            <Text style={styles.text}>Welcome!</Text>\n

        </View>\n
      </DemoBox>\n
    </View>\n
  );
}
const windowWidth=Dimensions.get("window").width;\n
const windowHeight=Dimensions.get("window").height;\n
`
;

export default function DimentionsAPI() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Dimensions API</Text>
      <Text style={styles.theory}>Gives device screen width/height for responsive layouts but doesn’t auto-update on orientation change.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>

        </View>
      </DemoBox>
    </View>
  );
}

const windowWidth=Dimensions.get("window").width;
const windowHeight=Dimensions.get("window").height;

console.log(windowWidth,windowWidth);

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
  ,
  container:{
    flex:1,
    backgroundColor:'plum',
    alignItems:"center",
    justifyContent:"center",
  },
  box:{
    width:windowWidth > 500 ? "70%" : "90%",
    height:windowHeight > 600 ? "60%" : "90%",
    backgroundColor:"lightblue",
    justifyContent:"center",

  },
  text:{
    fontSize:windowWidth > 500 ? 50: 24,
  },

});
