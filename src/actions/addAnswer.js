import * as API from "../_DATA";
import { setLoading } from "./setLoading";
import { updateQuestion } from "./questions";
import { updateUser } from "./users";

export const ADD_ANSWER = "ADD_ANSWER";
export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

export function handleAddAnswer(response) {
  return (dispatch) => {
    dispatch(setLoading(true));
    return API._saveQuestionAnswer(response).then(() => {
      dispatch(updateQuestion(response));
      dispatch(updateUser(response));
      dispatch(setLoading(false));
    });
  };
}
