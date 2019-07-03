import React from 'react';
import { connect } from "react-redux";

import Turn from "./Turn";
import Board from "./Board";
import MovesCounter from "./MovesCounter";
import Menu from './Menu';
import { isNullOrUndefined } from 'util';
import { playPosition, fetchState, newGame, saveGame } from '../../redux/actions';
import { PlayerX, Player0, PATH } from "../../constants";

import '../../assets/styles/App.css';
import PlayersName from './PlayerName';
import { getLastGameId } from '../../redux/selectors';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewGame: true,
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    let { pathname } = this.props.location;
    if (pathname === PATH.new){
      this.reset();
    } else {  // Load existing game
      let { id } = this.props.match.params;
      id = id ? id : this.props.lastGame;
      console.log(`id is ${id}`);
      this.setState({ isNewGame: false });
      this.props.dispatch(fetchState(id));
    }
  }

  handleSquareClick(row, column) {
    console.log(`Square Click ${row} ${column}`);
    this.props.dispatch(playPosition(row, column, this.props.turn));
  }

  reset() {
    this.setState({ isNewGame: true })
  }

  countPlays(values) {
    let counter = 0;
    for (let row of values) {
      counter = row.reduce((accumulator, value) => {
        return value !== '-' ? accumulator + 1 : accumulator
      }, counter);
    }
    return counter;
  }

  detectWinner(matrix) {
    if (this.countPlays(matrix) < 5) {
      return null;
    }
    let winMatrix = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ]
    for (let condition of winMatrix) {
      let values = condition.map((point) => {
        return matrix[point[0]][point[1]];
      });
      if (values.some((val) => val === '-')) { continue }

      let val = values.reduce((prev, curr) => {
        return prev === curr ? curr : false;
      });
      if (val) {
        return val === 'X' ? PlayerX : Player0;
      }
    }
    return null;
  }

  getHeaderText(player, winner, plays) {
    let text = "";
    if (winner) {
      text = `The winner is ${winner}`;
    } else if (plays === 9) {
      text = "Draw! Play again"
    } else {
      text = (
        <div>
          <h3>Welcome {player}</h3>
          <p>Turn of {this.props.turn}</p>
        </div>
      );
    }
    return text;
  }

  onPlayerSubmit = (playerName) => {
    this.setState({ isNewGame: false });
    this.props.dispatch(newGame(playerName));
  }

  onGameSubmit = (name) => {
    let data = {
      values: this.props.values,
      turn: this.props.turn,
      player_name: this.props.currentGame.player,
    }
    this.props.dispatch(saveGame(name, data));
  }

  render() {
    if (this.props.fetch.fetching) {
      return <h3>Wait while fetching saved game</h3>
    } else if (!this.props.fetch.fetching && this.props.fetch.error) {
      console.log(this.props.fetch.error);
      return <h3>Error getting state from server</h3>
    }

    if (this.state.isNewGame) {
      return (
        <PlayersName currentName={this.props.currentGame.player} 
            submitPlayerName={this.onPlayerSubmit} />
      )
    }
    let winner = this.detectWinner(this.props.values);
    let plays = this.countPlays(this.props.values);
    return (
      <>
        <Turn text={this.getHeaderText(this.props.currentGame.player, winner, plays)} />
        <Board onSquareClick={this.handleSquareClick}
          disabled={!isNullOrUndefined(winner)}
          values={this.props.values} />
        <MovesCounter plays={this.countPlays(this.props.values)} />
        <Menu gameName={this.props.gameName} reset={this.reset} submitGame={this.onGameSubmit} />
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.values,
    turn: state.turn,
    fetch: state.fetch,
    gameName: state.gameName,
    currentGame: state.game,
    lastGame: getLastGameId(state),
  }
}

export default connect(mapStateToProps)(Game);