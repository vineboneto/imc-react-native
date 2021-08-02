import React from 'react';
import { View } from 'react-native';
import dateformat from 'dateformat';
import { useNavigation } from '@react-navigation/native';

import ButtonInfoAction from '../ButtonInfoAction';
import ImcRadiusMini from '../ImcRadiusMini';
import InfoText from '../InfoText';

import { theme } from '../../styles/theme';
import styles from './styles';
import api from '../../api';

const ImcRegister = ({ data, reload }) => {
  const navigation = useNavigation();
  const { imc, weight, height, date, id } = data;
  const formatDate = new Date(date);
  const weightFormat = parseFloat(weight).toFixed(2).replace('.', ',');
  const heightFormat = parseFloat(height).toFixed(2).replace('.', ',');

  const handleDeleteRegisterImc = async () => {
    await api.delete(`/registro/${id}`);
    reload();
  };

  const handleEditRegisterImc = () => {
    navigation.navigate('ImcCreate', {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImcRadiusMini imc={imc} />
        <View style={styles.textContent}>
          <InfoText target="Peso: " text={`${weightFormat}(kg)`} />
          <InfoText target="Altura: " text={`${heightFormat}(m)`} />
          <InfoText
            target="Data: "
            text={dateformat(formatDate, 'dd/mm/yyyy')}
          />
        </View>
        <View style={styles.buttonGroup}>
          <ButtonInfoAction text="Editar" onPress={handleEditRegisterImc} />
          <ButtonInfoAction
            text="Excluir"
            color={theme.colors.danger}
            onPress={handleDeleteRegisterImc}
          />
        </View>
      </View>
    </View>
  );
};

export default ImcRegister;
