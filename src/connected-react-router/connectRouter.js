import { LOCATION_CHANGE } from "./constants";

export default function connectRouter(history) {
  let initialState = {
    action: history.action, // POP PUSH REPLACE
    location: history.location
  };
  return function(state = initialState, action) {
    const type = action.type;

    if (type === LOCATION_CHANGE) {
      return { ...state, ...action.payload };
    }
    return state;
  };
}
