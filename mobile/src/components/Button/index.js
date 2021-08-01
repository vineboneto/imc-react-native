import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';

import styles from './styles';

const Button = ({ text, contained, enable = true, ...rest }) => {
  const { primary, white, light } = theme.colors;

  const handleButtonColor = () => {
    if (!enable) {
      return light;
    } else if (contained) {
      return primary;
    }
    return white;
  };

  return (
    <RectButton
      style={[
        styles.container,
        {
          backgroundColor: handleButtonColor(),
        },
      ]}
      enabled={enable}
      {...rest}>
      <Text style={[styles.text, { color: contained ? white : primary }]}>
        {text}
      </Text>
    </RectButton>
  );
};

export default Button;
