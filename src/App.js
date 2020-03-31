import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';
import store from './store/index';
import history from './services/history';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
