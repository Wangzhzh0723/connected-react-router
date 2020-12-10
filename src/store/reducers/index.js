import { combineReducers } from "redux";
import counter from "./counter";
import home from "./home";
import { connectRouter } from "../../connected-react-router";
import history from "../../history";

const reducer = combineReducers({
  counter,
  home,
  router: connectRouter(history)
});

export default reducer;
