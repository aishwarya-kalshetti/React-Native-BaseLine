import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

type Props = {
  code: string;
};

const CodeBlock: React.FC<Props> = ({ code }) => {
  return (
    <ScrollView style={styles.container} horizontal>
      <Text style={styles.code}>{code}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    padding: 10,
    borderRadius: 8,
    margin: 8
  },
  code: {
    color: '#d1fae5',
    fontFamily: 'monospace'
  }
});

export default CodeBlock;
