import { POST_STATE_SUCCESS } from "../actionTypes";

function gameNameReducer(state = "", action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      return action.name;
    default:
      return state;
  }
}

export default gameNameReducer;