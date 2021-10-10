import * as API from "../../Database/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setLoading } from "./loading";

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