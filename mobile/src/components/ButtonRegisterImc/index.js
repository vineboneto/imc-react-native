import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const ButtonRegisterImc = ({ ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>CADASTRAR</Text>
    </RectButton>
  );
};

export default ButtonRegisterImc;
