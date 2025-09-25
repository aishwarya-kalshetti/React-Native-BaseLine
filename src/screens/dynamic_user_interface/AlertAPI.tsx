import React from 'react';
import { View, Text, StyleSheet, Alert, Button ,Platform} from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `export default function AlertAPI() {
  const showAlert = () => {
    if (Platform.OS === 'web') {
    // Browser version
    console.log("Hello Welcome to React Native World - Want to stay on React Native");
    window.alert("Hello Welcome to React Native World\nWant to stay on React Native");
  } else {
    // Mobile version
    Alert.alert(
      "Hello Welcome to React Native World",
      "Want to stay on React Native",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Later", onPress: () => console.log("Later Pressed") },
        { text: "Ok", onPress: () => console.log("Ok Pressed") }
      ]
    );
  }
};
  return (
    <View style={styles.container}>
      <Button title="Click me" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});`;

export default function AlertAPI() {
  const showAlert = () => {
    if (Platform.OS === 'web') {
    // Browser version
    console.log("Hello Welcome to React Native World - Want to stay on React Native");
    window.alert("Hello Welcome to React Native World\nWant to stay on React Native");
  } else {
    // Mobile version
    Alert.alert(
      "Hello Welcome to React Native World",
      "Want to stay on React Native",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Later", onPress: () => console.log("Later Pressed") },
        { text: "Ok", onPress: () => console.log("Ok Pressed") }
      ]
    );
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert API</Text>
      <Text style={styles.theory}>
        The Alert API utilizes the alert method to present the alert dialog box. 
        This dialog box can include three types of buttons: positive, negative, 
        and neutral, each designed for performing different actions.
      </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
          <Button title="Click me" onPress={showAlert} />
        </View>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
