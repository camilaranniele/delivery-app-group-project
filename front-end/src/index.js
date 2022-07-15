import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const colors = {
  green: {
  300: '#2FC18C',
  500: '#036B52'
  },
  blue: {
  500: '#056CF9'
  },
  purple: {
  500: '#421981'
  }
}
  
const theme = extendTheme({ colors });

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



