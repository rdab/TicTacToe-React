import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import gameReducer, { gameReducerV2 } from "./gameReducer";
import fetchReducer from "./fetchReducer";
import uriReducer from "./uriReducer";
import gameListReducer from "./games";

export default (history) => combineReducers({
  router: connectRouter(history),
  values: gameReducer,
  fetch: fetchReducer,
  uri: uriReducer,
  game: gameReducerV2,
  games: gameListReducer,
})