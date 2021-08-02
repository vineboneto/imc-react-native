import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { AppRoutes } from './routes/app.routes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppRoutes />
    </>
  );
};

export default App;
