import { useState } from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import axios from "axios";
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example=`export default function App() {
  const [advice, setAdvice] = useState("");
  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() *
      (max - min + 1)) + min).toString();
  };
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice/" +
        getRandomId(1, 200)) // Fetching advice using a random ID
      .then((response) => {
        // Updating the 'advice' state with the fetched advice
        setAdvice(response.data.slip.advice);
      });
  };
  return (
    <View style={styles.container}>
      {/* Displaying the fetched advice */}
      <Text style={styles.advice}>{advice}</Text>
      {/* Button to trigger the getAdvice function */}
      <Button title="Get Advice"
        onPress={getAdvice} color="green" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    backgroundColor: "#fff",
    alignItems: "center", 
    justifyContent: "center", 
  advice: {
    fontSize: 20,
    fontWeight: "bold", 
    marginHorizontal: 20, 
  },
});
`;

export default function App() {
  const [advice, setAdvice] = useState("");
  const getRandomId = (min, max) => {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return (Math.floor(Math.random() *
      (max - min + 1)) + min).toString();
  };

  // Function to fetch advice from the API
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice/" +
        getRandomId(1, 200)) 
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Axios</Text>
      <Text style={styles.theory}>Axios is a library that helps you send HTTP requests in React Native apps. It allows mobile devices to communicate with a server, enabling them to send and receive data through API endpoints. This means that when you want to get information from a server or send information to it, Axios makes it easier to do so.</Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
           <Text style={styles.advice}>{advice}</Text>
           <Button title="Get Advice" onPress={getAdvice} color="green" />
        </View>
      </DemoBox>
    </View>
    
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' }
  ,
  container: {
    flex: 1, 
    backgroundColor: "#fff",
    alignItems: "center", 
    justifyContent: "center", 
  },
  advice: {
    fontSize: 20,
    fontWeight: "bold", 
    marginHorizontal: 20, 
  },
});