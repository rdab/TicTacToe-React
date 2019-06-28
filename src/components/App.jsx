import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../assets/styles/App.css';
import Header from "./Header";
import Board  from "./Board";
import MovesCounter from "./MovesCounter";
import Menu from './Menu';

const PlayerX = "Player 1 - Xs";
const Player0 = "Player 2 - 0s";

function getNewState(){
  return {
    turn: PlayerX,
    values: [
      ["-","-","-"],
      ["-","-","-"],
      ["-","-","-"]
    ],
    plays: 0,
  };
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = getNewState();

    this.appClick = this.appClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  appClick(row, column){
    console.log(`Square Click ${row} ${column}`);
    let newValues = JSON.parse(JSON.stringify(this.state.values));
    newValues[row][column] = this.state.turn === PlayerX ? 'X' : '0';
    let plays = this.state.plays + 1;
    this.setState({
      turn: this.state.turn === PlayerX ? Player0 : PlayerX,
      values: newValues,
      plays: plays,
    });
  }

  reset(){
    this.setState(getNewState());
  }

  render() {
    let text = "Turn of " + this.state.turn;
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
          <Board appClick={this.appClick} values={this.state.values} />
          <MovesCounter plays={this.state.plays} />
          <Menu reset={this.reset}/>
        </section>
      </Container>
    )
  }
}

export default App;
