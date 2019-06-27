import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {
    let board = this.props.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(<Square value={value}/>);
      })
      return (<div>{row}</div>);
    })
    return (<div>{board}</div>);
  }
}

export default Board;