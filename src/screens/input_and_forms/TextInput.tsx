import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar } from "react-native";
import {useState} from "react";
export default function TextInputExample(){
    const [name,setName]=useState("");
    return(
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} 
            value={name} 
            onChangeText={setName} 
            placeholder="email@example.com"
            // secureTextEntry
            // keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            />
            <TextInput style={[styles.input, styles.multilineText]} placeholder="message" multiline/>
            <Text style={styles.text}>My name is {name}</Text>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:StatusBar.currentHeight,
    },
    input:{
        height:40,
        margin:12,
        padding:10,
        borderWidth:1,
    },
    text:{
        fontSize:30,
        padding:10,
    },
    multilineText:{
        minHeight:100,
        textAlignVertical:"top",
    },
});