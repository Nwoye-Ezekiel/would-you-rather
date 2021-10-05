import * as API from "../_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setLoading } from "./setLoading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(setLoading(true));
    return Promise.all([API._getQuestions(), API._getUsers()]).then(
      ([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setLoading(false));
      }
    );
  };
}


