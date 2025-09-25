import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `
export default function JSONExample() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setData(json);
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <Text>{item.name} - {item.email}</Text>
  );
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="Reload Data" onPress={fetchData} />
    </View>
  );
}
`;

export default function JSONExample() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setData(json);
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item.name} - {item.email}</Text>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>JSON Handling Example with FlatList</Text>
      <Text style={styles.theory}>
        This example fetches JSON data from an API and displays it using a FlatList for better performance.
      </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <View style={styles.container}>
          <FlatList 
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Button title="Reload Data" onPress={fetchData} />
        </View>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
