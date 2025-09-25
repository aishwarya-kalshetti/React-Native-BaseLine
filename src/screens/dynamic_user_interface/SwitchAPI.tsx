import React,{useState} from 'react';
import { View, Text, StyleSheet , Switch} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `
export default function SwitchAPI() {
  const [Enable,setEnable]=useState(false);

  const toggle=(state)=>{
    setEnable(state);
  }
    return(
    <View style={styles.container}>
          <Text style={{color: Enable ? "red" : "green"}}>
            Welcome To...
          </Text>
          <Switch 
          trackColor={{false: "#43f746", true: "#63dff2"}}
          thumbColor={Enable ? "#faf68c" : "#e243f7"}
          onValueChange={toggle}
          value={Enable}
          />
        </View>
    );
}
    const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
});
`
;

export default function SwitchAPI() {
  const [Enable,setEnable]=useState(false);

  const toggle=(state)=>{
    setEnable(state);

  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Switch API</Text>
      <Text style={styles.theory}>The Switch component is a controlled component, meaning it requires a callback function to update the props based on the user's actions.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
          <Text style={{color: Enable ? "red" : "green"}}>
            Welcome To...
          </Text>
          <Switch 
          trackColor={{false: "#43f746", true: "#63dff2"}}
          thumbColor={Enable ? "#faf68c" : "#e243f7"}
          onValueChange={toggle}
          value={Enable}
          />
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
    alignItems:"center",
    justifyContent:"center",
  },
  
});
