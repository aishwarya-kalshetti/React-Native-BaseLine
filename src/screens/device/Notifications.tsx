import React, { useEffect, useState } from "react";
import { View, Text, Button, Platform, StyleSheet, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import DemoBox from '../../components/DemoBox';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotificationsComponent: React.FC = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello!",
        body: "This is a test notification.",
        sound: true,
      },
      trigger: { seconds: 5 }, 
    });
    Alert.alert("Notification scheduled", "It will appear in 5 seconds!");
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.theory}>
        Handles local notifications using Expo.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Text style={styles.text}>Expo Push Token: {expoPushToken}</Text>
      <Button title="Send Local Notification" onPress={scheduleNotification} />
    </View>
    </DemoBox>
    </View>
  );
};

async function registerForPushNotificationsAsync(): Promise<string | null> {
  let token;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return null;
  }

  token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
});

export default NotificationsComponent;
