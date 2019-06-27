import React from "react";

class Board extends React.Component {
  render() {
    let board = this.props.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(<span>{value}</span>);
      })
      return (<div>{row}</div>);
    })
    return (<div>{board}</div>);
  }
}

export default Board;