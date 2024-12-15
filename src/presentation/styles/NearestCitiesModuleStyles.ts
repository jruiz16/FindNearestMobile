import { StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

const NearestCitiesModuleStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CommonStyles.spacing.medium,
  },
  title: {
    fontSize: CommonStyles.typography.fontSizeLarge,
    fontWeight: CommonStyles.typography.fontWeightBold,
    marginBottom: CommonStyles.spacing.small,
  },
  city: {
    fontSize: CommonStyles.typography.fontSizeMedium,
    paddingVertical: CommonStyles.spacing.small,
  },
  noData: {
    fontSize: CommonStyles.typography.fontSizeSmall,
    fontStyle: 'italic',
    color: CommonStyles.colors.background,
  },
  loadingAnimation: {
    width: 150, // Tamaño de la animación
    height: 150,
    alignSelf: 'center', // Centrar la animación
    marginTop: CommonStyles.spacing.medium,
  },
});

export default NearestCitiesModuleStyles;
