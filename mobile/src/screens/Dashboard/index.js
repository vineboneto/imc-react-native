import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import api from '../../api';

const Dashboard = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>MEU IMC</Text>
      </View>
    </View>
  );
};

export default Dashboard;
