import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export default function ThemingScreen() {
  const { scheme, toggle, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <Text style={[styles.title, { color: colors.text }]}>Theming</Text>
      <Text style={[styles.theory, { color: colors.text }]}>
        Simple theme toggle via context (light/dark).
      </Text>

      <View style={styles.demoBox}>
        <Text style={{ color: colors.text }}>Current theme: {scheme}</Text>
        <Button title="Toggle theme" onPress={toggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
  theory: { fontSize: 14, marginBottom: 16 },
  demoBox: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#888",
    alignItems: "center",
  },
});
