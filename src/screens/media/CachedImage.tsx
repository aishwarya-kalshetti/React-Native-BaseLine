import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import DemoBox from '../../components/DemoBox';

interface CachedImageProps {
  uri: string;
  width?: number;
  height?: number;
}

const CachedImage: React.FC<CachedImageProps> = ({
  uri,
  width = 300,
  height = 200,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Cached Image</Text>
      <Text style={styles.theory}>
        Displays a cached remote image for performance.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Text style={styles.title1}>Cached Image</Text>
      <Image
        source={{ uri: "https://placekitten.com/500/400" }}
        style={{ width, height, borderRadius: 10 }}
        cachePolicy="memory-disk" 
        contentFit="cover"
      />
    </View>
    </DemoBox>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default CachedImage;
