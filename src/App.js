import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import store from './store/index';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
