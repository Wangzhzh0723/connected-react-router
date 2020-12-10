import { CALL_HISTORY_METHOD } from "./push";

// routerMiddleware中间件

export default function routerMiddleware(history) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === CALL_HISTORY_METHOD) {
          history.push(action.payload);
        } else {
          next(action);
        }
      };
    };
  };
}
