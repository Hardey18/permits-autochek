import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import counterReducer from "./ducks/counter";
import userReducer from "./ducks/permits";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
//   counter: counterReducer,
  permit: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
