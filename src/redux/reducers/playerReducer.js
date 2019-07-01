import { ADD_PLAYERS, FETCH_STATE_SUCCESS } from "../actionTypes";

function playerReducer(state = "", action) {
  switch (action.type) {
    case ADD_PLAYERS:
      return action.player_name;
    case FETCH_STATE_SUCCESS:
      return action.state.player_name ? action.state.player_name: "";
    default:
      return state;
  }
}

export default playerReducer;