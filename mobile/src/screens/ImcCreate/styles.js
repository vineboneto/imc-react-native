import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 148,
    paddingHorizontal: 20,
  },
  infoRadius: {
    marginBottom: 62,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
});
