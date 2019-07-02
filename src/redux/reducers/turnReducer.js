import { PlayerX, Player0 }  from "../../constants";
import { PLAY_POSITION, FETCH_STATE_SUCCESS, NEW_GAME } from "../actionTypes";

function turnReducer(state = PlayerX, action) {
  switch (action.type) {
    case NEW_GAME:
      return PlayerX;
    case PLAY_POSITION:
      return action.turn === PlayerX ? Player0 : PlayerX;
    case FETCH_STATE_SUCCESS:
      return action.state.turn;
    default:
      return state;
  }
}

export default turnReducer;