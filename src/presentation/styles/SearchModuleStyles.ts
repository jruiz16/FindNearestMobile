import { StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

const SearchModuleStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CommonStyles.spacing.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: CommonStyles.spacing.small,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: CommonStyles.colors.border,
    borderWidth: 1,
    borderRadius: CommonStyles.borderRadius.medium,
    paddingHorizontal: CommonStyles.spacing.medium,
    marginRight: CommonStyles.spacing.small,
  },
  clearButton: {
    backgroundColor: CommonStyles.colors.primary,
    borderRadius: CommonStyles.borderRadius.medium,
    padding: CommonStyles.spacing.small,
  },
  clearButtonText: {
    color: CommonStyles.colors.white,
    fontSize: CommonStyles.typography.fontSizeSmall,
    fontWeight: CommonStyles.typography.fontWeightBold,
  },
  city: {
    fontSize: CommonStyles.typography.fontSizeMedium,
    paddingVertical: CommonStyles.spacing.small,
  },
});

export default SearchModuleStyles;
