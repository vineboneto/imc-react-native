import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const ButtonUpdateWeight = ({ weight, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWeight}>{`Peso Alvo: ${weight}`}</Text>
      <RectButton style={styles.button} {...rest}>
        <Text style={styles.buttonText}>Editar</Text>
      </RectButton>
    </View>
  );
};

export default ButtonUpdateWeight;
