import { POST_STATE_SUCCESS, DELETE_GAME } from "../actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      return [...state, {
        uri: action.uri,
        name: action.name,
        updateDate: new Date(),
      }];
    case DELETE_GAME:
      return state.filter(game => game.uri !== action.uri);
    default:
      return state;
  }
};