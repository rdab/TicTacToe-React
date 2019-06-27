import React from 'react';
import '../assets/styles/App.css';
import Header from "./Header";
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
    this.appClick = this.appClick.bind(this);
  }

  appClick(row, column){
    console.log(`Square Click ${row} ${column}`);
  }

  render() {
    let text = "Turn of " + this.state.turn;
    return (
      <div>
        <Header text={text} />
        <Board appClick={this.appClick} values={this.state.values} />
      </div>
    )
  }
}

export default App;
