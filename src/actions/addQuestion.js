import * as API from "../_DATA";
export const ADD_QUESTION = "ADD_QUESTION";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return API._saveQuestion(question).then((question) => {
      question = { [question.id]: question };
      dispatch(addQuestion(question));
    });
  };
}
