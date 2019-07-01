import { FETCH } from "../../constants";
import { FETCH_STATE_BEGIN, FETCH_STATE_SUCCESS, FETCH_STATE_FAILURE, POST_STATE_SUCCESS } from "../actionTypes";

export default function fetchReducer(state=FETCH, action) {
  let newState;
  switch (action.type) {
    case FETCH_STATE_BEGIN:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = true;
      return newState;
    case FETCH_STATE_SUCCESS:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = false;
      newState.finished = true;
      return newState;
      case POST_STATE_SUCCESS:
        newState = JSON.parse(JSON.stringify(state));
        newState.fetching = false;
        newState.finished = true;
        return newState;
    case FETCH_STATE_FAILURE:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = false;
      newState.error = action.error;
      return newState;
    default:
      return state;
  }
}