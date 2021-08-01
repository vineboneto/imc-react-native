import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: 29,
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
  infoContent: {
    marginTop: 45,
    marginBottom: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 340,
  },
  buttonRegister: {
    height: 55,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 19,
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonTextRegister: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
