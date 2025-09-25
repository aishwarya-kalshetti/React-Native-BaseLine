import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DemoBox from '../../components/DemoBox';

export default function CameraPicker() {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera permission is required!');
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Camera Picker</Text>
      <Text style={styles.theory}>
        Can Access the camera, ask for Permission, click the image, and view it
      </Text>
      <DemoBox>
        <View style={styles.container}>
          <Button title="Open Camera" onPress={openCamera} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
