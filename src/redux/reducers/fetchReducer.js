import { FETCH } from "../../constants";
import { FETCH_STATE_BEGIN, FETCH_STATE_SUCCESS, FETCH_STATE_FAILURE } from "../actionTypes";

function fetchReducer(state=FETCH, action) {
  let newState;
  switch (action.type) {
    case FETCH_STATE_BEGIN:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = true;
    case FETCH_STATE_SUCCESS:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = false;
      newState.finished = true;
    case FETCH_STATE_FAILURE:
      newState = JSON.parse(JSON.stringify(state));
      newState.fetching = false;
      newState.error = action.error;
    default:
      newState = state;
  }
  return newState;
}