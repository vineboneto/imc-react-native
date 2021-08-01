import React, { memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>MEU IMC</Text>
    </View>
  );
};

export default memo(Header);
