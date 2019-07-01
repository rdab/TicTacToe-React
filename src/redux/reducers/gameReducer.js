import { PlayerX, VALUES }  from "../../constants";
import { PLAY_POSITION, FETCH_STATE_SUCCESS, NEW_GAME } from "../actionTypes";

function gameReducer(state = VALUES, action) {
  switch (action.type) {
    case NEW_GAME:
      return VALUES;
    case PLAY_POSITION:
      let newState = JSON.parse(JSON.stringify(state));
      let newValue = action.turn === PlayerX ? "X" : "0";
      newState[action.x][action.y] = newValue;
      return newState;
    case FETCH_STATE_SUCCESS:
      return action.state.values;
    default:
      return state;
  }
}

export default gameReducer;