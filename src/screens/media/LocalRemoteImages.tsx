import React from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";
import DemoBox from '../../components/DemoBox';
const LocalRemoteImages: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Local Remote Image</Text>
      <Text style={styles.theory}>
        Displays local and remote images in a scrollable view.
      </Text>
      <DemoBox>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Local Image</Text>
      <Image
        source={require("../../../assets/icon.png")} 
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Remote Image</Text>
      <Image
        source={{ uri: "https://placekitten.com/400/300" }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title1}>Remote Image with Caching</Text>
      <Image
        source={{ uri: "https://placekitten.com/500/400" }}
        style={styles.image}
        resizeMode="cover"
      />
    </ScrollView>
    </DemoBox>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title1: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default LocalRemoteImages;
