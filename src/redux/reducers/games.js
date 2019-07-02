import { NEW_GAME } from "../actionTypes";
import TicTacToe from "../../gameService";

export default function (state = [], action) {
  switch (action.type) {
    case NEW_GAME:
      let newGame = new TicTacToe(action.playerName);
      return [...state, newGame]
    default:
      return state;
  }
};