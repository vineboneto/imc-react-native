import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 50,
    width: 150,
    marginHorizontal: 5,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
