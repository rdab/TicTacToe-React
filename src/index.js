import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Container from "react-bootstrap/Container";

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
      <Container>
        <Header />
        <Main />
      </Container>
    </ConnectedRouter>
  </Provider>,
  rootElement
);
