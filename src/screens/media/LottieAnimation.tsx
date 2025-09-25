import React, { useRef } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import DemoBox from '../../components/DemoBox';
const LottieAnimation: React.FC = () => {
  const animationRef = useRef<LottieView>(null);

  const playAnimation = () => {
    animationRef.current?.play();
  };

  const resetAnimation = () => {
    animationRef.current?.reset();
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Lottie Animation</Text>
      <Text style={styles.theory}>
        Plays a Lottie JSON animation with play/reset controls.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require("../../../assets/icon.png")} 
        autoPlay={false}
        loop={true}
        style={styles.lottie}
      />
      <View style={styles.buttons}>
        <Button title="Play" onPress={playAnimation} />
        <View style={{ width: 20 }} />
        <Button title="Reset" onPress={resetAnimation} />
      </View>
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
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default LottieAnimation;
