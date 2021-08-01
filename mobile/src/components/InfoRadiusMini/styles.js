import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    height: 89,
    width: 89,
    borderWidth: 2,
    borderColor: theme.colors.success,
    borderRadius: 89 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 28,
    fontWeight: '300',
    fontFamily: theme.fonts.light,
    color: theme.colors.black,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: theme.colors.light,
    fontFamily: theme.fonts.light,
  },
});
