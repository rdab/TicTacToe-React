import React from "react";

const squareStyle = {
  height: "100px",
  width: "100px"
}

class Square extends React.Component {
  constructor(props){
    super(props);
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(){
    if (this.props.value === '-'){
      let row = this.props.rowIndex;
      let col = this.props.columnIndex;
      this.props.onSquareClick(row, col);
    }
  }

  render() {
    let disabled = this.props.value !== '-' || this.props.disabled;
    return (
      <button className="btn btn-light" style={squareStyle} 
        disabled={disabled}
        onClick={this.handleSquareClick} >
          {this.props.value}
      </button>
    );
  }
}

export default Square;