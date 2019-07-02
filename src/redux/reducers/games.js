import { NEW_GAME, POST_STATE_SUCCESS } from "../actionTypes";
import TicTacToe from "../../gameService";

export default function (state = [], action) {
  switch (action.type) {
    case NEW_GAME:
      let newGame = new TicTacToe(action.playerName);
      return [...state, newGame]
    case POST_STATE_SUCCESS:
      let games = [...state];
      let game = games.find(item => item.name = action.name);
      game.uri = action.uri;
      game.name = action.name;
      return games;
    default:
      return state;
  }
};