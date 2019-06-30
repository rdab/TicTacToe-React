import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import turnReducer from "./turnReducer";
import gameReducer from "./gameReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  turn: turnReducer,
  values: gameReducer,
})