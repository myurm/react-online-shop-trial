import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './../src/components/App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router";
import { Provider } from "react-redux";
// Provider란? react로 작성된 하위 컴포넌트들이 redux store에 접근이 가능할 수 있게 함
import store from "./store";
import history from "./utils/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();