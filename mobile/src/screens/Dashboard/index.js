import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import InfoRadius from '../../components/InfoRadius';
import ButtonRegisterImc from '../../components/ButtonRegisterImc';
import ImcRegister from '../../components/ImcRegister';
import ButtonNewWeight from '../../components/ButtonNewWeight';
import ButtonUpdateWeight from '../../components/ButtonUpdateWeight';

import { theme } from '../../styles/theme';
import styles from './styles';
import api from '../../api';

const Dashboard = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [state, setState] = useState({
    currentWeight: null,
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
    if (isFocused) {
      api.get('/peso-alvo').then((response) => {
        const { peso } = response.data;
        if (peso) {
          setState((old) => ({
            ...old,
            currentWeight: peso.replace('.', ','),
          }));
        }
      });
    }
  }, [state.currentWeight, isFocused]);

  useEffect(() => {
    api.get('/registro').then((response) => {
      console.log(response.data);
      const datas = response.data;
      setState((old) => ({
        ...old,
        registers: datas.map((value) => ({
          id: value.id,
          height: value.altura,
          date: value.data,
          weight: value.peso,
          imc: (value.peso / value.altura ** 2).toFixed(1),
        })),
      }));
    });
  }, []);

  const handleNavigationImcCreate = () => {
    navigation.navigate('ImcCreate');
  };

  const handleNavigationWeightCreate = () => {
    navigation.navigate('WeightCreate');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.currentWeight ? (
          <ButtonUpdateWeight
            onPress={handleNavigationWeightCreate}
            weight={state.currentWeight}
          />
        ) : (
          <ButtonNewWeight onPress={handleNavigationWeightCreate} />
        )}

        <View style={styles.infoRadius}>
          <InfoRadius number={8.9} description="imc" />
          <InfoRadius
            number={60.3}
            description="peso(kg)"
            color={theme.colors.primary}
          />
        </View>
        <ButtonRegisterImc onPress={handleNavigationImcCreate} />
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
