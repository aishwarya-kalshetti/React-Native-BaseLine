import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DemoBox from '../../components/DemoBox';

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

const LocationMap: React.FC<LocationMapProps> = ({
  latitude = 37.78825,
  longitude = -122.4324,
  zoom = 15,
}) => {
  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Location Map</Text>
      <Text style={styles.theory}>
        Displays the user’s current location on a map (mobile) or an embedded Google Map (web).
      </Text>
      <DemoBox>
    <View style={styles.container}>
      <iframe
        title="location-map"
        src={mapSrc}
        style={styles.map}
        frameBorder="0"
        allowFullScreen
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
    flex: 1,
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
    border: 0,
  },
});

export default LocationMap;
