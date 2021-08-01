import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const ButtonNewWeight = () => {
  return (
    <RectButton style={styles.button}>
      <Text style={styles.buttonText}>CADASTRAR PESO ALVO</Text>
    </RectButton>
  );
};

export default ButtonNewWeight;
