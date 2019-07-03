import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gameReducer from "./gameReducer";
import fetchReducer from "./fetchReducer";
import gameListReducer from "./games";

export default (history) => combineReducers({
  router: connectRouter(history),
  fetch: fetchReducer,
  game: gameReducer,
  games: gameListReducer,
})