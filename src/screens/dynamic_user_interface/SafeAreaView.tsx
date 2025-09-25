import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CodeBlock from '../../components/CodeBlock';
import DemoBox from '../../components/DemoBox';

const example = `
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function SafeAreaExample() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.text}>Hello Safe Area!</Text>
    </SafeAreaView>
  );
}
`;

export default function SafeAreaExample() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Safe Area View</Text>
      <Text style={styles.theory}>
        Ensures content avoids notches, status bars, and safe areas for better UI visibility.
      </Text>
      <CodeBlock code={example} />
      <DemoBox>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>
            <View style={styles.box}>
              <Text style={styles.text}>Welcome!</Text>
            </View>
          </View>
        </SafeAreaView>
      </DemoBox>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', margin: 8 },
  theory: { marginHorizontal: 8, color: '#333' },
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
