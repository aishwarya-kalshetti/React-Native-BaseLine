import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  ProgressBar,
  MD3Colors,
  TextInput,
} from "react-native-paper";

const ProgressBarScreen: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [progressColor, setProgressColor] = useState<string>(
    MD3Colors.error50
  );

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [occ, setOcc] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    let filled = 0;
    if (name.trim()) filled++;
    if (age.trim()) filled++;
    if (occ.trim()) filled++;
    if (location.trim()) filled++;
    setProgress(filled / 4); 
  }, [name, age, occ, location]);

  
  useEffect(() => {
    if (progress === 1) {
      setProgressColor(MD3Colors.primary0);
    } else {
      setProgressColor(MD3Colors.error50);
    }
  }, [progress]);

  return (
    <ScrollView style={{ flex: 1 }}>
      
      <Text style={styles.title}>ProgressBar</Text>

     
      <Text style={styles.theory}>
        A progress bar shows the completion status of a task. Here, it
        updates as you fill in the form fields.
      </Text>

      
      <View style={styles.demoBox}>
        <ProgressBar progress={progress} color={progressColor} />
        <View style={styles.form}>
          <Text style={styles.formTitle}>Fill the details below</Text>

          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Age"
            value={age}
            onChangeText={setAge}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Occupation"
            value={occ}
            onChangeText={setOcc}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Location"
            value={location}
            onChangeText={setLocation}
            style={styles.input}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProgressBarScreen;

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
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  form: {
    marginTop: 20,
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
});
