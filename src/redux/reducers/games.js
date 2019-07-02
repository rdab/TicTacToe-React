import { POST_STATE_SUCCESS } from "../actionTypes";

const initialState = []

export default function (state = [], action) {
  switch (action.type) {
    case POST_STATE_SUCCESS:
      return [...state, {
        uri: action.uri,
        name: action.name,
        updateDate: new Date(),
      }];
    default:
      return state;
  }
};