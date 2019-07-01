import { FETCH_STATE_SUCCESS, RESTART_GAME, NEW_GAME } from "../actionTypes";

function playerReducer(state = "", action) {
  switch (action.type) {
    case NEW_GAME:
      return action.playerName;
    case FETCH_STATE_SUCCESS:
      return action.state.player_name ? action.state.player_name: "";
    default:
      return state;
  }
}

export default playerReducer;