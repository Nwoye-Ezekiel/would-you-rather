import { ADD_QUESTION } from "../actions/addQuestion";
import { RECEIVE_QUESTIONS, UPDATE_QUESTION } from "../actions/questions";

export function questions(state = {}, action) {
  console.log("Action before dispatch", action)
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...action.question,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        [action.response.qid]: {
          ...state[action.response.qid],
          [action.response.answer]: {
            ...state[action.response.qid][action.response.answer],
            votes: state[action.response.qid][action.response.answer].votes.concat([
              action.response.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
