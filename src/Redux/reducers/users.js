import { RECEIVE_USERS } from "../actions/users";
import { UPDATE_USER_ANSWERS } from "../actions/users";
import { UPDATE_USER_QUESTIONS } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        [action.response.authedUser]: {
          ...state[action.response.authedUser],
          answers: {
            ...state[action.response.authedUser].answers,
            [action.response.qid]: action.response.answer,
          },
        },
      };
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        [action.response.author]: {
          ...state[action.response.author],
          questions: state[action.response.author].questions.concat([
            action.response.id,
          ]),
        },
      };
    default:
      return state;
  }
}