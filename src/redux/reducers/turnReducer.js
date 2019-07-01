import { PlayerX, Player0 }  from "../../constants";
import { PLAY_POSITION, RESTART_GAME, FETCH_STATE_SUCCESS } from "../actionTypes";

function turnReducer(state = PlayerX, action) {
  switch (action.type) {
    case PLAY_POSITION:
      return action.turn === PlayerX ? Player0 : PlayerX;
    case RESTART_GAME:
      return PlayerX;
    case FETCH_STATE_SUCCESS:
      return action.state.turn;
    default:
      return state;
  }
}

export default turnReducer;