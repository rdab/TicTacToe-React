import { POST_STATE_SUCCESS } from "../actionTypes";

function uriReducer(state = "", action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      console.log(`Reducer ${action.type} received ${action.uri}`);
      return action.uri;
    default:
      return state;
  }
}

export default uriReducer;