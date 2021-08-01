import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 19,
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
