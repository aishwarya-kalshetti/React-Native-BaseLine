import React, { useRef } from "react";
import { View, StyleSheet, Button ,Text} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import DemoBox from '../../components/DemoBox';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<Video>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      await videoRef.current.playAsync();
    }
  };

  const handlePause = async () => {
    if (videoRef.current) {
      await videoRef.current.pauseAsync();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Video Player</Text>
      <Text style={styles.theory}>
        Plays videos with play/pause controls.
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <View style={styles.buttons}>
        <Button title="Play" onPress={handlePlay} />
        <View style={{ width: 20 }} />
        <Button title="Pause" onPress={handlePause} />
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
    padding: 20,
  },
  video: {
    width: 320,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default VideoPlayer;
