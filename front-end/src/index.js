import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './styles/theme';

const colors = {
  green: {
  300: '#2FC18C',
  500: '#036B52'
  },
  grey: {
  100: '#E5E5E5'
  },
  blue: {
  500: '#056CF9'
  },
  purple: {
  500: '#421981'
  }
}

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
