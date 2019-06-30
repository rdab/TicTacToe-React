import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from "./redux/store"
import Header from "./components/Header";
import Main from "./components/Main";
import { VALUES, PlayerX } from './constants';

import './assets/styles/index.css';

const store = configureStore({
  values: VALUES,
  turn: PlayerX,
})

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Header />
      <Main />
    </ConnectedRouter>
  </Provider>,
  rootElement
);
