import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
  },
  textWeight: {
    color: theme.colors.grayDark,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  button: {
    backgroundColor: theme.colors.primary,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    paddingVertical: 26,
    borderRadius: 4,
    marginLeft: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
