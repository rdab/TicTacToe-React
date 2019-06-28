import { PLAY_POSITION } from "./actionTypes";

export function playPosition(x, y, turn) {
  return {
    type: PLAY_POSITION,
    x: x,
    y: y,
    turn: turn
  }
}