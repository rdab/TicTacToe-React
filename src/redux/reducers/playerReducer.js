import { ADD_PLAYER, FETCH_STATE_SUCCESS } from "../actionTypes";

function playerReducer(state = "", action) {
  switch (action.type) {
    case ADD_PLAYER:
      return action.playerName;
    case FETCH_STATE_SUCCESS:
      return action.state.player_name ? action.state.player_name: "";
    default:
      return state;
  }
}

export default playerReducer;