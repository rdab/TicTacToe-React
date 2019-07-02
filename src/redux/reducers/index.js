import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import turnReducer from "./turnReducer";
import gameReducer from "./gameReducer";
import fetchReducer from "./fetchReducer";
import playerReducer from "./playerReducer";
import gameNameReducer from "./gameNameReducer";
import uriReducer from "./uriReducer";
import gamesReducer from "./games";

export default (history) => combineReducers({
  router: connectRouter(history),
  turn: turnReducer,
  values: gameReducer,
  fetch: fetchReducer,
  playerName: playerReducer,
  gameName: gameNameReducer,
  uri: uriReducer,
  games: gamesReducer,
})