import { takeLatest } from "redux-saga/effects";
import { handleGetPermit } from "./handlers/permit";
import { GET_PERMITS } from "../ducks/permits";

export function* watcherSaga() {
  yield takeLatest(GET_PERMITS, handleGetPermit);
}
