import { SET_LOADING } from "../actions/loading";

export function loading(state = true, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.bool;
    default:
      return state;
  }
}
