import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Header />
      <GlobalStyle />
    </BrowserRouter>
  );
}
