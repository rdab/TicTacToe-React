import React from "react";
import { Route } from "react-router-dom";
import Game from "./TicTacToe/Game";
import GameList from "./TicTacToe/GameList";
import Home from "./Home";

class Main extends React.Component {
  render() {
    return (
      <section className="mt-4">
        <Route exact path='/' component={Home} />
        <Route path='/new' component={Game} />
        <Route path='/continue' component={() => <Game continue="true" />} />
        <Route path='/games' component={GameList} />
      </section>
    );
  }
}

export default Main;