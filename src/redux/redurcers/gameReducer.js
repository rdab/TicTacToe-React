import { PlayerX, VALUES }  from "../../constants";

function gameReducer(state = VALUES, action) {
  switch (action.type) {
    case "PLAY_POSITION":
      let newState = JSON.parse(JSON.stringify(state));
      let newValue = action.turn === PlayerX ? "X" : "0";
      newState[action.x][action.y] = newValue;
      return newState;
    default:
      return state;
  }
}

export default gameReducer;