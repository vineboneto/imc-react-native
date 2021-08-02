import React from 'react';
import { View } from 'react-native';
import dateformat from 'dateformat';

import ButtonInfoAction from '../ButtonInfoAction';
import InfoRadiusMini from '../InfoRadiusMini';
import InfoText from '../InfoText';

import { theme } from '../../styles/theme';
import styles from './styles';

const ImcRegister = ({ data }) => {
  const { imc, weight, height, date } = data;
  const formatDate = new Date(date);
  const weightFormat = parseFloat(weight).toFixed(2).replace('.', ',');
  const heightFormat = parseFloat(height).toFixed(2).replace('.', ',');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InfoRadiusMini number={imc} description="imc" />
        <View style={styles.textContent}>
          <InfoText target="Peso: " text={`${weightFormat}(kg)`} />
          <InfoText target="Altura: " text={`${heightFormat}(m)`} />
          <InfoText
            target="Data: "
            text={dateformat(formatDate, 'dd/mm/yyyy')}
          />
        </View>
        <View style={styles.buttonGroup}>
          <ButtonInfoAction text="Editar" />
          <ButtonInfoAction text="Excluir" color={theme.colors.danger} />
        </View>
      </View>
    </View>
  );
};

export default ImcRegister;
