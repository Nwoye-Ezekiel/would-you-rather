import * as API from "../_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([API._getQuestions(), API._getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      }
    );
  };
}
