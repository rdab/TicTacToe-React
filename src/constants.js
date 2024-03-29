export const PlayerX = "Player 1 - Xs";
export const Player0 = "Player 2 - 0s";

export const VALUES = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
];

export const FETCH = {
  fetching: false,
  finished: false,
  error: null,
}

export const HEADERS = {
  'Content-Type': 'application/json',
}

export const DEFAULT_ID = "i216a";
export const API_POST = "https://api.myjson.com/bins";
export const makeURI = (id) => `${API_POST}/${id}`;

export const PATH = {
  home: "/",
  new: "/new",
  continue: "/continue",
  games: "/games"
}