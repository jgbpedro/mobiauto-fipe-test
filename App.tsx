import './src/config/ReactotronConfig';

import { Provider } from 'react-redux';
import React from 'react';
import Routes from './src/routes';
import { StoreProvider } from "redux-react-hook";
import store from './src/store';

const App = () => (
  <StoreProvider value={store}>
    <Routes />
  </StoreProvider>
);

export default App;
