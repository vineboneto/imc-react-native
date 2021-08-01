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
