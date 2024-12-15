import { StyleSheet } from 'react-native';

const CommonStyles = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#f8f8f8',
    text: '#333',
    muted: '#666',
    border: '#ccc',
    danger: '#dc3545',
    white: '#fff',
  },
  typography: {
    fontSizeSmall: 12,
    fontSizeMedium: 16,
    fontSizeLarge: 18,
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightBold: 'bold' as const,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export default CommonStyles;
