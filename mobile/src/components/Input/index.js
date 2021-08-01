import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { theme } from '../../styles/theme';
import styles from './styles';

const Input = ({ label, target, ...rest }) => {
  return (
    <View style={styles.inputGroup}>
      <TextInput
        editable
        placeholder={label}
        style={styles.input}
        placeholderTextColor={theme.colors.light}
        {...rest}
      />
      <Text style={styles.target}>{target}</Text>
    </View>
  );
};

export default Input;
