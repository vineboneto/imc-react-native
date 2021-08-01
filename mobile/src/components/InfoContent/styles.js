import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 358,
    paddingVertical: 18,
    textAlign: 'left',
  },
  textContent: {
    marginHorizontal: 21,
  },
  buttonGroup: {
    justifyContent: 'space-between',
    height: 87,
  },
});
