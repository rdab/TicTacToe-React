import { SAVE_GAME } from "../actionTypes";

function gameNameReducer(state = "", action) {
  switch (action.type) {
    case SAVE_GAME:
      console.log(`Reducer ${SAVE_GAME} received ${action.gameName}`);
      return action.gameName;
    default:
      return state;
  }
}

export default gameNameReducer;