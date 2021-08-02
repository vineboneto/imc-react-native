import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import InfoRadius from '../../components/InfoRadius';
import ImcRadius from '../../components/ImcRadius';
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
    reload: false,
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

  const sortByDate = (a, b) => {
    return a.data < b.data;
  };

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
    if (isFocused) {
      api.get('/registro').then((response) => {
        const datas = response.data;
        if (datas) {
          const sortedData = datas.sort(sortByDate);
          setState((old) => ({
            ...old,
            registers: sortedData.map((value) => ({
              id: value.id,
              height: value.altura,
              date: value.data,
              weight: value.peso,
              imc: (value.peso / value.altura ** 2).toFixed(1),
            })),
          }));
        }
      });
    }
  }, [isFocused, state.reload]);

  const handleNavigationImcCreate = () => {
    navigation.navigate('ImcCreate');
  };

  const handleNavigationWeightCreate = () => {
    navigation.navigate('WeightCreate');
  };

  const handleReload = () => {
    setState((old) => ({
      ...old,
      reload: !state.reload,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.currentWeight && parseFloat(state.currentWeight) !== 0 ? (
          <ButtonUpdateWeight
            onPress={handleNavigationWeightCreate}
            weight={state.currentWeight}
          />
        ) : (
          <ButtonNewWeight onPress={handleNavigationWeightCreate} />
        )}

        <View style={styles.infoRadius}>
          <ImcRadius imc={state.registers[0]?.imc} />
          <InfoRadius
            number={state.registers[0]?.weight}
            description="peso(kg)"
            color={theme.colors.primary}
          />
        </View>
        <ButtonRegisterImc onPress={handleNavigationImcCreate} />
        {state.currentWeight && (
          <FlatList
            data={state.registers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ImcRegister data={item} reload={handleReload} />
            )}
            style={styles.registerImc}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Dashboard;
