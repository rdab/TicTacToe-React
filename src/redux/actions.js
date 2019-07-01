import * as actions from "./actionTypes";
import { API } from "../constants";

export function playPosition(x, y, turn) {
  return {
    type: actions.PLAY_POSITION,
    x: x,
    y: y,
    turn: turn
  }
}

export function restartGame() {
  return {
    type: actions.RESTART_GAME,
  }
}

export function fetchState() {
  return dispatch => {
    dispatch(fetchStateBegin());
    return fetch(API)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        return dispatch(fetchStateSuccess(json));
      })
      .catch(error => { 
        console.log(error);
        return dispatch(fetchStateFailure(error));
      })
  }
}

export function fetchStateBegin() {
  return { type: actions.FETCH_STATE_BEGIN }
}

export function fetchStateSuccess(json_received) {
  return {
    type: actions.FETCH_STATE_SUCCESS,
    state: json_received,
  }
}

export function fetchStateFailure(error) {
  return {
    type: actions.FETCH_STATE_FAILURE,
    error: error,
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(`ERROR!: ${response.statusText}`);
    throw Error(response.statusText);
  }
  return response;
}

export function addPlayers(player1) {
  return {
    type: actions.ADD_PLAYERS,
    player_name: player1,
  }
}