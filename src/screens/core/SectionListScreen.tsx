import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { List } from "react-native-paper";

const sections = [
  { title: "Fruits", data: ["Apple", "Banana", "Orange"] },
  { title: "Vegetables", data: ["Carrot", "Tomato", "Cucumber"] },
];

const SectionListScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <Text style={styles.title}>SectionList</Text>

      <Text style={styles.theory}>
        SectionList is similar to FlatList but supports grouping items into
        sections with headers.
      </Text>
      
      <SectionList
        style={styles.demoBox}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <List.Item title={item} left={() => <List.Icon icon="circle" />} />}
        renderSectionHeader={({ section: { title } }) => (
          <List.Subheader>{title}</List.Subheader>
        )}
      />
    </View>
  );
};

export default SectionListScreen;

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
