import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props){
    super(props);
    this.boardClick = this.boardClick.bind(this);
  }

  boardClick(row, column){
    this.props.appClick(row, column);
  }

  render() {
    let board = this.props.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(
          <Square rowIndex={rowIndex} 
            columnIndex={columnIndex} 
            boardClick={this.boardClick} 
            key={"".concat(rowIndex, columnIndex)} 
            value={value}/>
        );
      })
      return (<div key={"row".concat(rowIndex)}>{row}</div>);
    })
    return (<div>{board}</div>);
  }
}

export default Board;