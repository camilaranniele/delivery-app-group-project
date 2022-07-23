import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: {
      50: '#B1C2BE',
      300: '#2FC18C',
      500: '#036B52',
      600: '#001813',
    },
    blue: {
      100: '#F2FFFC',
      500: '#056CF9',
    },
    purple: {
      500: '#421981',
    },
    gray: {
      100: '#FBFFFE',
      200: '#EAF1EF',
      300: '#E5E5E5',
      500: '#343434',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
});

export default theme;
