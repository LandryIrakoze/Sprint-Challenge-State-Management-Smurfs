import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));
