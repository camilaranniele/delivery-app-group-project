import React from 'react';
import Routes from './routes';
import Provider from './provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
