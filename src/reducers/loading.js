// import { RECEIVE_USERS } from "../actions/users";
// import { ADD_QUESTION } from "../actions/addQuestion";
import { SET_LOADING } from "../actions/setLoading";

export function loading(state = true, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.bool;
    default:
      return state;
  }
}
/* export function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return false;
    case ADD_QUESTION:
      return false;
    default:
      return state;
  }
} */
