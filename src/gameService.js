import { PlayerX, VALUES } from "./constants";

export default class TicTacToe {

  constructor(player="", turn=PlayerX, values=VALUES,
              name="", uri=""){
    this.playerName = player;
    this.turn = turn;
    this.values = values;
    this.name = name;
    this.uri = uri;
  }
}