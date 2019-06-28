import { combineReducers } from "redux";
import { turnReducer } from "./turnReducer";
import { gameReducer } from "./gameReducer";

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer,
});

export default GlobalState;