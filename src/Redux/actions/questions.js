import * as API from "../../Database/_DATA";
import { setLoading } from "./loading";
import { updateUserQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function updateQuestion(response) {
  return {
    type: UPDATE_QUESTION,
    response,
  };
}

// async action creator
export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(setLoading(true));
    return API._saveQuestion(question).then((question) => {
      dispatch(addQuestion({ [question.id]: question }));
      dispatch(updateUserQuestions(question));
      dispatch(setLoading(false));
    });
  };
}