import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { GET_PERMITS } from "../ducks/permits";

export function* watcherSaga() {
  yield takeLatest(GET_PERMITS, handleGetUser);
}
