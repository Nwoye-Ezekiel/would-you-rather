import { RECEIVE_USERS } from "../actions/users";

export function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
}
