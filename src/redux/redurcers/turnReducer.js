import { PlayerX, Player0 }  from "../../constants";
import { PLAY_POSITION } from "../actionTypes";

function turnReducer(state = PlayerX, action) {
  switch (action.type) {
    case PLAY_POSITION:
      return action.turn === PlayerX ? Player0 : PlayerX;
    default:
      return state;
  }
}

export default turnReducer;