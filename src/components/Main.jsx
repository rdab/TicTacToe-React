import React from "react";
import { Route } from "react-router-dom";
import Game from "./TicTacToe/Game";
import GameList from "./TicTacToe/GameList";
import Home from "./Home";
import { PATH } from "../constants";

class Main extends React.Component {
  render() {
    return (
      <section className="mt-4">
        <Route exact path={PATH.home} component={Home} />
        <Route exact path={PATH.new} component={Game} />
        <Route exact path={PATH.continue} component={Game} />
        <Route path={`${PATH.continue}/:id`} component={Game} />
        <Route exact path={PATH.games} component={GameList} />
      </section>
    );
  }
}

export default Main;