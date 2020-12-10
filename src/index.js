import React from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import { ConnectedRouter } from "./connected-react-router";
import history from "./history";
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Link to="/home">home</Link>|<Link to="/counter">counter</Link>
      <Route path="/home" component={Home} />
      <Route path="/counter" component={Counter} />
    </ConnectedRouter>
  </Provider>,
  window.root
);
