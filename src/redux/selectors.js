import { DEFAULT_ID } from "../constants";

export const getLastGame = (store) => {
  if (store.games.length == 0) { return null }
  return store.games.reduce((acc, current) => {
    return acc.updateDate > current.updateDate ? acc : current;
  });
}

export const getLastGameId = (store) => {
  let id = DEFAULT_ID;
  let lastGame = getLastGame(store);
  if (lastGame) {
    id = lastGame.uri.split('/').pop();
  }
  return id;
}