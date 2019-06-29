import { combineReducers } from "redux";
import turnReducer from "./turnReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
    turn: turnReducer,
    values: gameReducer,
});