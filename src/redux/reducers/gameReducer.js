import { PlayerX, Player0, VALUES } from "../../constants";
import { PLAY_POSITION, FETCH_STATE_SUCCESS, POST_STATE_SUCCESS, NEW_GAME } from "../actionTypes";

export default function gameReducer(state = VALUES, action) {
  switch (action.type) {
    case NEW_GAME:
      return VALUES;
    case PLAY_POSITION:
      let newState = JSON.parse(JSON.stringify(state));
      let newValue = action.turn === PlayerX ? "X" : "0";
      newState[action.x][action.y] = newValue;
      return newState;
    case FETCH_STATE_SUCCESS:
      return action.state.values;
    default:
      return state;
  }
}


const initialState = {
  player: "",
  turn: PlayerX,
  values: VALUES,
  name: "",
  uri: null,
  updatedDate: null,
}

export function gameReducerV2(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...initialState,
        player: action.playerName,
      }
    case FETCH_STATE_SUCCESS:
      return {
        ...state,
        player: action.state.player_name ? action.state.player_name: "",
        turn: action.state.turn,
      }
    case POST_STATE_SUCCESS:
      return {
        ...state,
        name: action.name,
        uri: action.uri,
      }
    case PLAY_POSITION:
      return {
        ...state,
        turn: action.turn === PlayerX ? Player0 : PlayerX,
      }
    default:
      return state;
  }
}