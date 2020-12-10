import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { routerMiddleware } from "../connected-react-router";
import history from "../history";

const store = applyMiddleware(routerMiddleware(history))(createStore)(reducer);

export default store;
