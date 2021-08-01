import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
  },
  content: {
    height: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
});
