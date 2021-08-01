import React from 'react';
import { View, Text, TextInput } from 'react-native';

import InfoRadius from '../../components/InfoRadius';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { theme } from '../../styles/theme';
import styles from './styles';

const ImcCreate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InfoRadius number={8.9} description="imc" style={styles.infoRadius} />
        <Input label="Seu peso..." target="(kg)" keyboardType="numeric" />
        <Input label="Sua altura..." target="(kg)" keyboardType="numeric" />

        <View style={styles.buttonGroup}>
          <Button text="cancelar" />
          <Button text="salvar" contained />
        </View>
      </View>
    </View>
  );
};

export default ImcCreate;
