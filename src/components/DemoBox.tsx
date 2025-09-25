import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const DemoBox: React.FC<Props> = ({ children }) => {
  return <View style={styles.box}>{children}</View>;
};

const styles = StyleSheet.create({
  box: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  }
});

export default DemoBox;
