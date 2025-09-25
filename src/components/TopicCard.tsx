import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

const TopicCard: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  }
});

export default TopicCard;
