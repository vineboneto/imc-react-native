import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../styles/theme';

import styles from './styles';

const Header = ({ navigation, previous }) => {
  return (
    <View style={styles.header}>
      {previous ? (
        <BorderlessButton onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color={theme.colors.white} />
        </BorderlessButton>
      ) : null}

      <Text style={styles.title}>MEU IMC</Text>
    </View>
  );
};

export default memo(Header);
