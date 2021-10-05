import { RECEIVE_USERS } from "../actions/users";
import { UPDATE_USER } from "../actions/users";

export function users(state = {}, action) {
  console.log("Action before dispatch", action)
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER:
      return {
        ...state,
        [action.response.authedUser]: {
          ...state[action.response.authedUser],
          answers: {
            ...state[action.response.authedUser].answers,
            [action.response.qid]: action.response.answer
          }
        }
      };
    default:
      return state;
  }
}

