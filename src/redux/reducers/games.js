import { NEW_GAME } from "../actionTypes";
import TicTacToe from "../../gameService";

const initialState = {
  games: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      let newGame = new TicTacToe(action.playerName);
      return {
        ...state,
        games: [...state.games, newGame],
      }
    default:
      return state;
  }
};