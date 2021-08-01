import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const ButtonRegisterImc = () => {
  return (
    <RectButton style={styles.container}>
      <Text style={styles.text}>CADASTRAR</Text>
    </RectButton>
  );
};

export default ButtonRegisterImc;
