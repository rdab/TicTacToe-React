import { PlayerX, VALUES }  from "../../constants";
import { PLAY_POSITION, RESTART_GAME, FETCH_STATE_SUCCESS } from "../actionTypes";

function gameReducer(state = VALUES, action) {
  switch (action.type) {
    case PLAY_POSITION:
      let newState = JSON.parse(JSON.stringify(state));
      let newValue = action.turn === PlayerX ? "X" : "0";
      newState[action.x][action.y] = newValue;
      return newState;
    case RESTART_GAME:
      return VALUES;
    case FETCH_STATE_SUCCESS:
      return action.state.values;
    default:
      return state;
  }
}

export default gameReducer;