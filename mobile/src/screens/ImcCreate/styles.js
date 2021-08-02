import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollView: {
    flex: 1,
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
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    paddingBottom: 20,
    marginRight: 20,
  },
});
