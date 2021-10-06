import * as API from "../../Database/_DATA";
import { setLoading } from "./loading";
import { updateQuestion } from "./questions";
import { updateUserAnswers } from "./users";

export const ADD_ANSWER = "ADD_ANSWER";
export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

// async action
export function handleAddAnswer(response) {
  return (dispatch) => {
    dispatch(setLoading(true));
    return API._saveQuestionAnswer(response).then(() => {
      dispatch(updateQuestion(response));
      dispatch(updateUserAnswers(response));
      dispatch(setLoading(false));
    });
  };
}
