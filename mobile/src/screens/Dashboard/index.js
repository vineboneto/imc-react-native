import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
      </View>
    </View>
  );
};

export default Dashboard;
