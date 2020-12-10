import React from "react";
import { Router } from "react-router";
import { ReactReduxContext } from "react-redux";
import { LOCATION_CHANGE } from "./constants";

// 主要作用是监听路由变化
export default class ConnectedRouter extends React.Component {
  static contextType = ReactReduxContext;
  constructor(props) {
    super(props);
    const { history } = props;
    this.unlisten = history.listen(() => {
      this.context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: { action: history.action, location: history.location }
      });
    });
  }

  componentWillUnmount() {
    this.unlisten && this.unlisten();
  }

  render() {
    const { history, children } = this.props;
    return <Router history={history}>{children}</Router>;
  }
}
