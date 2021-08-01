import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../components/Header';
import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  </NavigationContainer>
);
