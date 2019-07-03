import { POST_STATE_SUCCESS, DELETE_GAME, PUT_STATE_SUCCESS } from "../actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      return [...state, {
        uri: action.uri,
        name: action.name,
        updateDate: new Date(),
      }];
    case PUT_STATE_SUCCESS:
      let game = {
        ...state.find(item => item.uri === action.uri),
        name: action.name,
        updateDate: new Date(),
      }
      let newlist = [
        ...state.filter(item => item.uri !== action.uri)
      ].push(game);
      return newlist;
    case DELETE_GAME:
      return state.filter(game => game.uri !== action.uri);
    default:
      return state;
  }
};