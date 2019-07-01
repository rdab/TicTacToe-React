import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import turnReducer from "./turnReducer";
import gameReducer from "./gameReducer";
import fetchReducer from "./fetchReducer";
import playerReducer from "./playerReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  turn: turnReducer,
  values: gameReducer,
  fetch: fetchReducer,
  player_name: playerReducer,
})