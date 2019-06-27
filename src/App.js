import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    let board = this.state.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(<span>{value}</span>);
      })
      return (<div>{row}</div>);
    })
    return (
      <div>
        <header>{text}</header>
        {board}
      </div>
    )
  }
}

export default App;
