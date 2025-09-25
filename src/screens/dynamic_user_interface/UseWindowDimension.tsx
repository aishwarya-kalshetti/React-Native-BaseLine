import React from 'react';
import { View, Text, StyleSheet ,useWindowDimensions} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `export default function UseWindowDimension() {\n
    const windoWidth=useWindowDimensions().width\n
    const windoHeight=useWindowDimensions().height;\n
  return (\n
        <View style={styles.container}>\n
            <View\n
            style={[styles.box,\n
                {\n
                    width:windoWidth > 500 ? "70%" : "90%",\n
                    height: windoHeight >600 ? "60%" : "90%",\n
                },\n
            ]}>\n
                <Text style={{fontSize:windoWidth >500 ? 50: 24}}>Welcome</Text>\n
            </View>\n
        </View>\n
  );
  }\n`
;

export default function UseWindowDimension() {
    const windoWidth=useWindowDimensions().width;
    const windoHeight=useWindowDimensions().height;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Use Window Dimension</Text>
      <Text style={styles.theory}>Hook that returns current screen size and auto-updates when the device rotates. </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
            <View
            style={[styles.box,
                {
                    width:windoWidth > 500 ? "70%" : "90%",
                    height: windoHeight >600 ? "60%" : "90%",
                },
            ]}>
                <Text style={{fontSize:windoWidth >500 ? 50: 24}}>Welcome</Text>
                
            </View>

        </View>
      </DemoBox>
    </View>
  );
}





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
    padding:20,

  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
  },

});
