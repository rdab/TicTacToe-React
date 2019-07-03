import { API } from "../constants";

export const getLastGameURI = (store) => {
  if (store.games.length == 0) { return API }
  return store.games.reduce((acc, current) => {
    return acc.updateDate > current.updateDate ? acc : current;
  });
}