import React from 'react';
import { View, Text, TextInput } from 'react-native';

import InfoRadius from '../../components/InfoRadius';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { theme } from '../../styles/theme';
import styles from './styles';

const WeightCreate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input label="Peso alvo..." target="(kg)" keyboardType="numeric" />
      </View>
      <View style={styles.buttonGroup}>
        <Button text="cancelar" />
        <Button text="salvar" contained />
      </View>
    </View>
  );
};

export default WeightCreate;
