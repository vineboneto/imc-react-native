import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import InfoRadius from '../../components/InfoRadius';

import { theme } from '../../styles/theme';
import styles from './styles';
import api from '../../api';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MEU IMC</Text>
      </View>

      <View style={styles.content}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR PESO ALVO</Text>
        </RectButton>
        <View style={styles.infoContent}>
          <InfoRadius number={8.9} description="imc" />
          <InfoRadius
            number={60.3}
            description="peso(kg)"
            color={theme.colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
