import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Board  from "./Board";

const PlayerX = "Player 1 - Xs";
const Player0 = "Player 2 - 0s";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      turn: PlayerX,
      values: [
        ["-","-","X"],
        ["-","0","-"],
        ["-","-","-"]
      ]
    }
  }

  render() {
    let text = "Turn of " + this.state.turn;
    return (
      <div>
        <Header text={text} />
        <Board values={this.state.values} />
      </div>
    )
  }
}

export default App;
