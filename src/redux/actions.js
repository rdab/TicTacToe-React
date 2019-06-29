import { PLAY_POSITION, RESTART_GAME } from "./actionTypes";

export function playPosition(x, y, turn) {
  return {
    type: PLAY_POSITION,
    x: x,
    y: y,
    turn: turn
  }
}

export function restartGame() {
  return {
    type: RESTART_GAME,
  }
}