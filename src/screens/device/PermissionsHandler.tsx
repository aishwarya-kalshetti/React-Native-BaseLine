import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet, Platform } from "react-native";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import DemoBox from '../../components/DemoBox';

type PermissionStatus = "granted" | "denied" | "undetermined";

const PermissionsHandler: React.FC = () => {
  const [cameraStatus, setCameraStatus] = useState<PermissionStatus>("undetermined");
  const [locationStatus, setLocationStatus] = useState<PermissionStatus>("undetermined");
  const [notificationStatus, setNotificationStatus] = useState<PermissionStatus>("undetermined");

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    setCameraStatus(status);
    Alert.alert("Camera Permission", `Status: ${status}`);
  };

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationStatus(status);
    Alert.alert("Location Permission", `Status: ${status}`);
  };

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setNotificationStatus(status);
    Alert.alert("Notification Permission", `Status: ${status}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Permissions Handler</Text>
      <Text style={styles.theory}>
       Manages permissions like camera, location, and notifications.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Text style={styles.title1}>Permissions Handler</Text>

      <Button title="Request Camera Permission" onPress={requestCameraPermission} />
      <Text>Status: {cameraStatus}</Text>

      <View style={styles.spacing} />

      <Button title="Request Location Permission" onPress={requestLocationPermission} />
      <Text>Status: {locationStatus}</Text>

      <View style={styles.spacing} />

      <Button title="Request Notification Permission" onPress={requestNotificationPermission} />
      <Text>Status: {notificationStatus}</Text>
    </View>
    </DemoBox>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  spacing: {
    height: 20,
  },
});

export default PermissionsHandler;
