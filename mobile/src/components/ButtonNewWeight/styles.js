import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  button: {
    backgroundColor: theme.colors.success,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 26,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
