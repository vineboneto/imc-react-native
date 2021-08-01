import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 33,
    width: 102,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
