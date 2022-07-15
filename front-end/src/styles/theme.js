import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: {
      100: '#B1C2BE',
      300: '#2FC18C',
      500: '#036B52',
      600: '#001813',
    },
    blue: {
      500: '#056CF9',
    },
    purple: {
      500: '#421981',
    },
    gray: {
      100: '#E5E5E5',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
});

export default theme;
