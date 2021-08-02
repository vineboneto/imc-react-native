import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import ImcRadius from '../../components/ImcRadius';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { theme } from '../../styles/theme';
import styles from './styles';
import api from '../../api';

const ImcCreate = ({ navigation, route }) => {
  const params = route.params;
  const [state, setState] = useState({
    imc: null,
    weight: '',
    height: '',
    enableButton: false,
  });

  const handleChangeText = (text, field) => {
    setState((old) => ({ ...old, [field]: text }));
  };

  useEffect(() => {
    validate();
  }, [state.weight, state.height]);

  useEffect(() => {
    if (params?.id) {
      api.get(`/registro/${params?.id}`).then((response) => {
        const data = response.data;
        setState((old) => ({
          ...old,
          height: data.altura,
          weight: data.peso,
        }));
      });
    }
  }, []);

  useEffect(() => {
    if (state.height && state.weight) {
      setState((old) => ({
        ...old,
        imc: (state.weight / state.height ** 2).toFixed(1),
      }));
    } else {
      setState((old) => ({
        ...old,
        imc: null,
      }));
    }
  }, [state.weight, state.height]);

  const validate = () => {
    if (state.weight && state.height) {
      setState((old) => ({ ...old, enableButton: true }));
    }
  };

  const handleAddImc = async () => {
    if (state.enableButton) {
      try {
        await api.post('/registro', {
          peso: parseFloat(state.weight).toFixed(1),
          altura: parseFloat(state.height).toFixed(2),
        });
        navigation.navigate('Dashboard');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateImc = async () => {
    if (state.enableButton) {
      try {
        await api.put(`/registro/${params?.id}`, {
          peso: parseFloat(state.weight).toFixed(1),
          altura: parseFloat(state.height).toFixed(2),
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          {state.imc && <ImcRadius imc={state.imc} style={styles.infoRadius} />}
          <Input
            label="Seu peso..."
            target="(kg)"
            keyboardType="numeric"
            value={state.weight}
            onChangeText={(text) => handleChangeText(text, 'weight')}
          />
          <Input
            label="Sua altura..."
            target="(kg)"
            keyboardType="numeric"
            value={state.height}
            onChangeText={(text) => handleChangeText(text, 'height')}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button text="cancelar" onPress={handleCancel} />
          <Button
            text="salvar"
            contained
            onPress={params?.id ? handleUpdateImc : handleAddImc}
            enable={state.enableButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ImcCreate;
