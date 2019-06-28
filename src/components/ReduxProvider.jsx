import { React } from "react";
import { Provider } from "react-redux";
import { VALUES, PlayerX } from "../constants/constants";
import { createStore } from "redux";
import { App } from "./App";

class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = { values: VALUES, turn: PlayerX };
    this.store = createStore(GlobalState, this.initialState);
  }

  render() {
    return(
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}