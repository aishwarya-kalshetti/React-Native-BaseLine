import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import CodeBlock from "../../components/CodeBlock";
import DemoBox from "../../components/DemoBox";

const DATA = [
  { id: "1", title: "Data Structures" },
  { id: "2", title: "STL" },
  { id: "3", title: "C++" },
  { id: "4", title: "Java" },
  { id: "5", title: "Python" },
  { id: "6", title: "CP" },
  { id: "7", title: "ReactJs" },
  { id: "8", title: "NodeJs" },
  { id: "9", title: "MongoDb" },
  { id: "10", title: "ExpressJs" },
  { id: "11", title: "PHP" },
  { id: "12", title: "MySql" },
];

type ItemType = {
  id: string;
  title: string;
};

const Item: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

const exampleCode = `<SearchBar
  placeholder="Search Here..."
  value={searchValue}
  onChangeText={searchFunction}
/>
<FlatList
  data={data}
  renderItem={({ item }) => <Item title={item.title} />}
  keyExtractor={(item) => item.id}
/>`;

const SearchScreen: React.FC = () => {
  const [data, setData] = React.useState<ItemType[]>(DATA);
  const [searchValue, setSearchValue] = React.useState("");
  const arrayholder = React.useRef<ItemType[]>(DATA);

  // Filter function
  const searchFunction = (text: string) => {
    const updatedData = arrayholder.current.filter((item) =>
      item.title.toUpperCase().includes(text.toUpperCase())
    );
    setData(updatedData);
    setSearchValue(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Search</Text>
      <Text style={styles.theory}>
        Allows searching through a list using a search bar and filters results dynamically.
      </Text>
      <CodeBlock code={exampleCode} />

      <DemoBox>
        <SearchBar
          placeholder="Search Here..."
          value={searchValue}
          onChangeText={searchFunction}
          lightTheme
          round
          autoCorrect={false}
          containerStyle={{
            backgroundColor: "white",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 10,
          }}
          inputContainerStyle={{ backgroundColor: "lightgrey", borderRadius: 10 }}
          inputStyle={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}
        />

        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10 }}
        />
      </DemoBox>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "700", margin: 8 },
  theory: { marginHorizontal: 8, color: "#333", marginBottom: 8 },
  item: {
    backgroundColor: "green",
    padding: 15,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  itemText: { color: "white", fontSize: 16 },
});
