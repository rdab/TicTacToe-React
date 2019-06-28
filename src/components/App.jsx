import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../assets/styles/App.css';
import Header from "./Header";
import Board from "./Board";
import MovesCounter from "./MovesCounter";
import Menu from './Menu';
import { isNullOrUndefined } from 'util';
import { connect } from "react-redux";
import { playPosition } from '../redux/actions';

const PlayerX = "Player 1 - Xs";
const Player0 = "Player 2 - 0s";

function getNewState() {
  return {
    turn: PlayerX,
    values: [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ],
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.appClick = this.appClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  appClick(row, column) {
    console.log(`Square Click ${row} ${column}`);
    this.props.dispatch(playPosition(row, column, this.props.turn));
  }

  reset() {
    this.setState(getNewState());
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

  render() {
    let winner = this.detectWinner(this.props.values);
    let plays = this.countPlays(this.props.values);
    let text = "";
    if (winner) {
      text = `The winner is ${winner}`;
    } else if (plays === 9) {
      text = "Draw! Play again"
    } else {
      text = `Turn of ${this.props.turn}`;
    }
    return (
      <Container>
        <header className="mt-3 mb-3">
          <Row className="text-center">
            <Col>
              <h1>
                Welcome to Tic Tac Toe!
              </h1>
            </Col>
          </Row>
        </header>
        <section id="TicTacToe">
          <Header text={text} />
          <Board appClick={this.appClick} disabled={!isNullOrUndefined(winner)} values={this.props.values} />
          <MovesCounter plays={this.countPlays(this.props.values)} />
          <Menu reset={this.reset} />
        </section>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.values,
    turn: state.turn,
  }
}

export default connect(mapStateToProps)(App);