import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import InfoRadius from '../../components/InfoRadius';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { theme } from '../../styles/theme';
import styles from './styles';
import api from '../../api/';

const WeightCreate = ({ navigation }) => {
  const [state, setState] = useState({
    weight: '',
    enableButton: false,
  });

  const handleChangeWeight = (text) => {
    console.log(text);
    setState((old) => ({ ...old, weight: text }));
  };

  useEffect(() => {
    validate();
  }, [state.weight]);

  const validate = () => {
    if (state.weight) {
      setState((old) => ({ ...old, enableButton: true }));
    }
  };

  const handleSaveWeight = async () => {
    if (state.enableButton) {
      console.log(state.weight);
      try {
        await api.put('/peso-alvo', {
          peso: parseFloat(state.weight).toFixed(1),
        });
        navigation.navigate('Dashboard');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          label="Peso alvo..."
          target="(kg)"
          keyboardType="numeric"
          value={state.weight}
          onChangeText={handleChangeWeight}
        />
      </View>
      <View style={styles.buttonGroup}>
        <Button text="cancelar" onPress={handleCancel} />
        <Button
          text="salvar"
          contained
          enable={state.enableButton}
          onPress={handleSaveWeight}
        />
      </View>
    </View>
  );
};

export default WeightCreate;
