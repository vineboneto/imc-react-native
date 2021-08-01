import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';

import styles from './styles';

const Button = ({ text, contained, ...rest }) => {
  const { primary, white } = theme.colors;

  return (
    <RectButton
      style={[
        styles.container,
        {
          backgroundColor: contained ? primary : white,
        },
      ]}
      {...rest}>
      <Text style={[styles.text, { color: contained ? white : primary }]}>
        {text}
      </Text>
    </RectButton>
  );
};

export default Button;
