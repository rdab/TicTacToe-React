import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {
    let board = this.props.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(<Square key={"".concat(rowIndex, columnIndex)} value={value}/>);
      })
      return (<div key={"row".concat(rowIndex)}>{row}</div>);
    })
    return (<div>{board}</div>);
  }
}

export default Board;