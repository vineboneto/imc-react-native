import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingTop: 60,
    paddingBottom: 40,
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
    left: 25,
    top: 44,
    flex: 1,
  },
});
