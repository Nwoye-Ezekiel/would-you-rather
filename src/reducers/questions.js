import { ADD_QUESTION } from "../actions/addQuestion";
import { RECEIVE_QUESTIONS } from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...action.question
      };
    default:
      return state;
  }
}
