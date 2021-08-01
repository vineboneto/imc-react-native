import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const InfoText = ({ target, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoText;
