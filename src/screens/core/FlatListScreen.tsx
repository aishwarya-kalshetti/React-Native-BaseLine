import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { List } from "react-native-paper";

const data = [
  { id: "1", name: "React" },
  { id: "2", name: "React Native" },
  { id: "3", name: "JavaScript" },
  { id: "4", name: "TypeScript" },
  { id: "5", name: "Node.js" },
];

const FlatListScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
     
      <Text style={styles.title}>FlatList</Text>

      
      <Text style={styles.theory}>
        FlatList is used for long scrollable lists with dynamic data.
        It only renders visible items for better performance.
      </Text>

      
      <FlatList
        style={styles.demoBox}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            left={() => <List.Icon icon="star" />}
          />
        )}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "700", margin: 8 },
  theory: { marginHorizontal: 8, color: "#333", fontSize: 14, marginBottom: 12 },
  demoBox: {
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});
