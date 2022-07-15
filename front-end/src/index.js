import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import App from './App';

const colors = {
  green: {
    100: '#B1C2BE',
    300: '#2FC18C',
    500: '#036B52',
    600: '#001813'
  },
  blue: {
    500: '#056CF9'
  },
  purple: {
    500: '#421981'
  },
  gray: {
    100: '#E5E5E5'
  }
}

const theme = extendTheme({ colors })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);



