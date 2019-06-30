import React from "react";
import { Route } from "react-router-dom";
import Game from "./TicTacToe/Game";
import Home from "./Home";

class Main extends React.Component {
  render() {
    return (
      <nav>
        <Route exact path='/' component={Home} />
        <Route path='/new' component={Game} />
        <Route path='/continue' component={Game} />
      </nav>
    );
  }
}

export default Main;