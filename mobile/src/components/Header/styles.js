import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
    flexDirection: 'row',
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 20,
    top: 15,
  },
});
