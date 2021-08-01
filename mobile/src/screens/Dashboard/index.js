import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import InfoRadius from '../../components/InfoRadius';
import ButtonRegisterImc from '../../components/ButtonRegisterImc';
import ImcRegister from '../../components/ImcRegister';

import { theme } from '../../styles/theme';
import { fakeDataRegisters } from '../../utils/fakeImcRegister';
import styles from './styles';
import api from '../../api';

const Dashboard = () => {
  const [state, setState] = useState({
    registers: [
      {
        id: 0,
        imc: 0,
        weight: 0,
        height: 0,
        date: null,
      },
    ],
  });

  useEffect(() => {
    setState((old) => ({
      ...old,
      registers: fakeDataRegisters().map((register) => ({
        id: register.id,
        date: register.date,
        height: register.height,
        imc: register.imc,
        weight: register.weight,
      })),
    }));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR PESO ALVO</Text>
        </RectButton>
        <View style={styles.infoRadius}>
          <InfoRadius number={8.9} description="imc" />
          <InfoRadius
            number={60.3}
            description="peso(kg)"
            color={theme.colors.primary}
          />
        </View>
        <ButtonRegisterImc />
        <FlatList
          data={state.registers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ImcRegister data={item} />}
          style={styles.registerImc}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Dashboard;
