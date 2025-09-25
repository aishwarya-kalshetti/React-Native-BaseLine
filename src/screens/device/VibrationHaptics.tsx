import React from "react";
import { View, Button, StyleSheet, Vibration, Platform, Alert, Text } from "react-native";
import * as Haptics from "expo-haptics";
import DemoBox from '../../components/DemoBox';

const VibrationHaptics: React.FC = () => {
  const handleVibration = () => {
    
    Vibration.vibrate(1000);
    Alert.alert("Vibration", "Device vibrated for 1 second!");
  };

  const handleHapticImpact = () => {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      Alert.alert("Haptic", "Medium impact haptic triggered!");
    }
  };

  const handleHapticNotification = () => {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert("Haptic Notification", "Success notification haptic triggered!");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Vibration Haptics</Text>
      <Text style={styles.theory}>
       Demonstrates vibration and haptic feedback on mobile devices.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Button title="Vibrate Device" onPress={handleVibration} />
      <View style={styles.spacing} />
      <Button title="Haptic Impact" onPress={handleHapticImpact} />
      <View style={styles.spacing} />
      <Button title="Haptic Notification" onPress={handleHapticNotification} />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  spacing: {
    height: 20,
  },
});

export default VibrationHaptics;
