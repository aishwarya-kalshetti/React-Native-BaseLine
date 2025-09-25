import React, { useRef, useEffect } from "react";
import { View, Button, Animated, StyleSheet ,Text} from "react-native";
import DemoBox from '../../components/DemoBox';
const AnimatedBox: React.FC = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const boxTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -150], 
  });

  const boxScale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5], 
  });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Animated Box</Text>
      <Text style={styles.theory}>
        A demo of React Native Animated API.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY: boxTranslateY }, { scale: boxScale }],
          },
        ]}
      />
      <Button title="Start Animation" onPress={startAnimation} />
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
    backgroundColor: "#4CAF50",
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default AnimatedBox;
