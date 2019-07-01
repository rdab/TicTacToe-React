import React from 'react';
import { connect } from "react-redux";

import Turn from "./Turn";
import Board from "./Board";
import MovesCounter from "./MovesCounter";
import Menu from './Menu';
import { isNullOrUndefined } from 'util';
import { playPosition, restartGame, fetchState, addPlayers } from '../../redux/actions';
import { PlayerX, Player0 } from "../../constants";

import '../../assets/styles/App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = { player1: "" };
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    if (this.props.continue) {
      this.props.dispatch(fetchState());
    } else {
      this.reset();
    }
  }

  handleSquareClick(row, column) {
    console.log(`Square Click ${row} ${column}`);
    this.props.dispatch(playPosition(row, column, this.props.turn));
  }

  reset() {
    this.props.dispatch(restartGame());
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

  getHeaderText(winner, plays) {
    let text = "";
    if (winner) {
      text = `The winner is ${winner}`;
    } else if (plays === 9) {
      text = "Draw! Play again"
    } else {
      text = `Turn of ${this.props.turn}`;
    }
    return text;
  }

  handlePlayerSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addPlayers(this.state.player1))
  }

  handlePlayerInputChange = (event) => {
    this.setState({ player1: event.target.value });
  }

  render() {
    if (this.props.fetch.fetching) {
      return <h3>Wait while fetching saved game</h3>
    } else if (!this.props.fetch.fetching && this.props.fetch.error) {
      console.log(this.props.fetch.error);
      return <h3>Error getting state from server</h3>
    }

    if (this.props.player_name === "") {
      return (
        <header>
          <form onSubmit={this.handlePlayerSubmit}>
            <label htmlFor="playerName">
              Player 1
            </label>
            <input type="text" value={this.state.player1}
              onChange={this.handlePlayerInputChange} />
            <input type="submit" value="Submit" />
          </form>
        </header>
      )
    }
    let winner = this.detectWinner(this.props.values);
    let plays = this.countPlays(this.props.values);
    return (
      <section id="TicTacToe">
        <Turn text={this.getHeaderText(winner, plays)} />
        <Board onSquareClick={this.handleSquareClick}
          disabled={!isNullOrUndefined(winner)}
          values={this.props.values} />
        <MovesCounter plays={this.countPlays(this.props.values)} />
        <Menu reset={this.reset} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.values,
    turn: state.turn,
    fetch: state.fetch,
    player_name: state.player_name,
  }
}

export default connect(mapStateToProps)(Game);