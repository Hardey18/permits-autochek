import { call, put } from "redux-saga/effects";
import { setPermit } from "../../ducks/permits";
import { requestGetPermit } from "../requests/permit";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export function* handleGetPermit() {
  try {
    const response: ResponseGenerator = yield call(requestGetPermit);
    const { data } = response;
    yield put(setPermit(data));
  } catch (error) {
    console.log(error);
  }
}
