import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from "./redux/store"

import Game from './components/TicTacToe/Game';
import './assets/styles/index.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  rootElement
);
