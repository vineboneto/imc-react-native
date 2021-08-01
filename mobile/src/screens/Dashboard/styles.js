import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.primary,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
