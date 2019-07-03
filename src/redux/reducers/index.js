import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gameReducer from "./gameReducer";
import fetchReducer from "./fetchReducer";
import uriReducer from "./uriReducer";
import gameListReducer from "./games";

export default (history) => combineReducers({
  router: connectRouter(history),
  fetch: fetchReducer,
  uri: uriReducer,
  game: gameReducer,
  games: gameListReducer,
})