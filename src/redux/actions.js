import * as actions from "./actionTypes";
import { API_POST, HEADERS, makeURI } from "../constants";

export function playPosition(x, y, turn) {
  return {
    type: actions.PLAY_POSITION,
    x: x,
    y: y,
    turn: turn
  }
}

export function fetchState(id) {
  let uri = makeURI(id);
  return dispatch => {
    dispatch(fetchStateBegin());
    console.log(`let fetch ${uri}`);
    return fetch(uri)
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

export function newGame(playerName) {
  return {
    type: actions.NEW_GAME,
    playerName: playerName,
  }
}

export function deleteGame(uri) {
  return {
    type: actions.DELETE_GAME,
    uri: uri,
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