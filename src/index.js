import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContainer";
import "./styles/main.scss";
import {createStore, applyMiddleware} from 'redux'
import { Provider } from "react-redux";

import reduxThunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <MainContent />
  </Provider>,
  document.getElementById("root")
);

