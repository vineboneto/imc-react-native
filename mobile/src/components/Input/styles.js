import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.light,
    backgroundColor: theme.colors.backgroundInput,
    width: 297,
    height: 60,
    paddingLeft: 18,
    fontSize: 22,
    borderRadius: 4,
    fontFamily: theme.fonts.regular,
  },
  target: {
    marginLeft: 10,
    fontSize: 22,
    color: theme.colors.light,
    fontFamily: theme.fonts.regular,
  },
});
