import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";

const AvatarScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
     
      <Text style={styles.title}>Avatar</Text>

    
      <Text style={styles.theory}>
        Avatars are visual representations of users, images, or icons.
        They can be shown as icons, images, or text placeholders.
      </Text>

     
      <View style={styles.demoBox}>
        
        <Text style={styles.sectionText}>Avatar Icon example</Text>
        <Avatar.Icon size={100} icon="account" />

       
        <Text style={styles.sectionText}>Avatar Image example</Text>
        <Avatar.Image
          size={100}
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
        />

       
        <Text style={styles.sectionText}>Avatar Text example</Text>
        <Avatar.Text size={100} label="AK" />
      </View>
    </ScrollView>
  );
};

export default AvatarScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    margin: 8,
  },
  theory: {
    marginHorizontal: 8,
    color: "#333",
    fontSize: 14,
  },
  demoBox: {
    margin: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  sectionText: {
    marginVertical: 12,
    fontSize: 18,
    fontWeight: "600",
  },
});
