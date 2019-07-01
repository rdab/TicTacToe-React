import * as actions from "./actionTypes";
import { API, API_POST, HEADERS } from "../constants";

export function playPosition(x, y, turn) {
  return {
    type: actions.PLAY_POSITION,
    x: x,
    y: y,
    turn: turn
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

export function newGame(name) {
  return {
    type: actions.NEW_GAME,
    playerName: name,
  }
}

export function saveGame(name, data) {
  return dispatch => {
    dispatch(fetchStateBegin());
    return postGame(API_POST, data)
      .then(json => {
        return dispatch(postStateSuccess(name, json));
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchStateFailure(error));
      })
  }

  function postStateSuccess(name, json_received) {
    return {
      type: actions.POST_STATE_SUCCESS,
      uri: json_received.uri,
      name: name,
    }
  }
}

function postGame(url, data) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: HEADERS,
    body: JSON.stringify(data),
  })
    .then(handleErrors)
    .then(response => response.json());
}