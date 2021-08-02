import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../styles/theme';
import styles from './styles';

const ButtonInfoAction = ({ text, color, ...rest }) => {
  return (
    <RectButton
      style={[
        styles.container,
        { backgroundColor: color ? color : theme.colors.primary },
      ]}
      {...rest}>
      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
};

export default ButtonInfoAction;
