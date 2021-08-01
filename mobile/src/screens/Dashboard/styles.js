import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 29,
  },
  infoRadius: {
    marginTop: 45,
    marginBottom: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 340,
  },
  registerImc: {
    width: '100%',
  },
});
