import { StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: CommonStyles.colors.background,
  },
  listSection: {
    flex: 2,
    backgroundColor: CommonStyles.colors.white,
    padding: CommonStyles.spacing.medium,
  },
  nearestSection: {
    flex: 1,
    backgroundColor: CommonStyles.colors.muted,
    padding: CommonStyles.spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: CommonStyles.typography.fontSizeMedium,
    color: CommonStyles.colors.muted,
    fontStyle: 'italic',
  },
  resetSection: {
    backgroundColor: CommonStyles.colors.secondary,
    padding: CommonStyles.spacing.small,
    alignItems: 'center',
  },
  resetButton: {
    fontSize: CommonStyles.typography.fontSizeMedium,
    color: CommonStyles.colors.primary,
    textDecorationLine: 'underline',
  },
});

export default AppStyles;
