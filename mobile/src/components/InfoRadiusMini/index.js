import React from 'react';
import { View, Text } from 'react-native';

import { theme } from '../../styles/theme';
import styles from './styles';

const InfoRadiusMini = ({ number, description, color }) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: color ? color : theme.colors.success },
      ]}>
      <Text style={styles.number}>{number.toString().replace('.', ',')}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default InfoRadiusMini;
