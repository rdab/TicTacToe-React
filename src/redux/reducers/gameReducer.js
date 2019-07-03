import { PlayerX, Player0, VALUES } from "../../constants";
import { PLAY_POSITION, FETCH_STATE_SUCCESS, POST_STATE_SUCCESS, NEW_GAME } from "../actionTypes";

const initialState = {
  player: "",
  turn: PlayerX,
  values: VALUES,
  name: "",
  uri: null,
}

export default function gameReducerV2(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...initialState,
        player: action.playerName,
      }
    case FETCH_STATE_SUCCESS:
      return {
        ...initialState,
        player: action.state.player_name ? action.state.player_name: "",
        turn: action.state.turn,
        values: action.state.values,
      }
    case POST_STATE_SUCCESS:
      return {
        ...state,
        name: action.name,
        uri: action.uri,
      }
    case PLAY_POSITION:
      let newState = JSON.parse(JSON.stringify(state.matrix));
      let newValue = action.turn === PlayerX ? "X" : "0";
      newState[action.x][action.y] = newValue;
      return {
        ...state,
        turn: action.turn === PlayerX ? Player0 : PlayerX,
        values: newState,
      }
    default:
      return state;
  }
}