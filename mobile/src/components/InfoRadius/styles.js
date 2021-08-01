import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    height: 163,
    width: 163,
    borderWidth: 4,
    borderColor: theme.colors.success,
    borderRadius: 163 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 50,
    fontWeight: '300',
    fontFamily: theme.fonts.light,
    color: theme.colors.black,
  },
  description: {
    fontSize: 20,
    fontWeight: '300',
    color: theme.colors.light,
    fontFamily: theme.fonts.light,
  },
});
