import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import turnReducer from "./turnReducer";
import gameReducer, { gameReducerV2 } from "./gameReducer";
import fetchReducer from "./fetchReducer";
import playerReducer from "./playerReducer";
import gameNameReducer from "./gameNameReducer";
import uriReducer from "./uriReducer";
import gameListReducer from "./games";

export default (history) => combineReducers({
  router: connectRouter(history),
  turn: turnReducer,
  values: gameReducer,
  fetch: fetchReducer,
  playerName: playerReducer,
  gameName: gameNameReducer,
  uri: uriReducer,
  game: gameReducerV2,
  games: gameListReducer,
})