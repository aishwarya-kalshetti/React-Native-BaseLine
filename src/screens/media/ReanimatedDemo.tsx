import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import DemoBox from '../../components/DemoBox';

const ReanimatedDemo: React.FC = () => {
  const translation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translation.value }],
    };
  });

  const moveBox = () => {
    translation.value = withSpring(translation.value === 0 ? -150 : 0, {
      damping: 10,
      stiffness: 100,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>ReanimatedDemo</Text>
      <Text style={styles.theory}>
        Demonstrates Reanimated 2 animations.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View style={{ height: 20 }} />
      <Button title="Move Box" onPress={moveBox} />
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#FF5722",
    borderRadius: 10,
  },
});

export default ReanimatedDemo;


