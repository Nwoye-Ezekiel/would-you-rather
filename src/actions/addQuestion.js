import * as API from "../_DATA";
import { setLoading } from "./setLoading";

export const ADD_QUESTION = "ADD_QUESTION";
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(setLoading(true));
    return API._saveQuestion(question).then((question) => {
      question = { [question.id]: question };
      dispatch(addQuestion(question));
      dispatch(setLoading(false));
    });
  };
}
