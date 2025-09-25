import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";

const ListScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      
      <Text style={styles.title}>List</Text>

      
      <Text style={styles.theory}>
        The List component is used to display static items. It’s simple and ideal
        for small datasets.
      </Text>

      
      <View style={styles.demoBox}>
        <List.Section>
          <List.Subheader>Fruits</List.Subheader>
          <List.Item title="Apple" left={() => <List.Icon icon="fruit-apple" />} />
          <List.Item title="Banana" left={() => <List.Icon icon="food-banana" />} />
          <List.Item title="Orange" left={() => <List.Icon icon="orange" />} />

          <List.Subheader>Vegetables</List.Subheader>
          <List.Item title="Carrot" left={() => <List.Icon icon="food-apple" />} />
          <List.Item title="Tomato" left={() => <List.Icon icon="food-tomato" />} />
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "700", margin: 8 },
  theory: { marginHorizontal: 8, color: "#333", fontSize: 14 },
  demoBox: {
    margin: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});
