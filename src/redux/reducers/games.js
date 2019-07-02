import { NEW_GAME } from "../actionTypes";

const initialState = {
  games: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return state
    default:
      return state;
  }
};