export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function updateQuestion(response) {
  return {
    type: UPDATE_QUESTION,
    response,
  };
}

