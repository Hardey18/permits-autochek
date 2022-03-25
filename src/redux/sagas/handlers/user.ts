import { call, put } from "redux-saga/effects";
import { setPermit } from "../../ducks/permits";
import { requestGetUser } from "../requests/user";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export function* handleGetUser() {
  try {
    const response: ResponseGenerator = yield call(requestGetUser);
    const { data } = response;
    yield put(setPermit(data));
  } catch (error) {
    console.log(error);
  }
}
