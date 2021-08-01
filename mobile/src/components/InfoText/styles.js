import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  target: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  text: {
    fontFamily: theme.fonts.light,
    fontSize: 16,
  },
});
