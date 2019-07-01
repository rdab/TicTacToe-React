import { POST_STATE_SUCCESS } from "../actionTypes";

function gameNameReducer(state = "", action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      console.log(`Reducer ${POST_STATE_SUCCESS} received ${action.name}`);
      return action.name;
    default:
      return state;
  }
}

export default gameNameReducer;