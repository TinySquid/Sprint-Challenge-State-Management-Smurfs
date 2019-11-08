import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import { reducer } from './reducer/reducer';

import App from "./components/App";

import "./index.css";

const reduxStore = createStore(reducer, applyMiddleware(ReduxThunk, ReduxLogger));

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
  , document.getElementById("root"));
