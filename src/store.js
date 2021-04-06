import { configureStore } from "@reduxjs/toolkit";
// ▲ redux-saga를 미들웨어로 사용할 것이기 때문에 createStore가 아닌 redux-toolkit의 configureStore를 사용
import createSagaMiddleware from "redux-saga";
// ▲ 미들웨어
import logger from "redux-logger";
// ▲ 다른 종류의 미들웨어 (prevState, action, nextState를 console 창에 보여주는 기능을 함)
import rootReducer from "./slice/rootSlice";
import rootSaga from "./sagas/rootSaga";
import history from "./utils/history";

const sagaMiddleware = createSagaMiddleware({
    context: { history: history }
});
// saga를 실행시켜줄 변수를 만듦

const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true, // devTools는 웹의 devTool과 연결할 것인지 여부를 적는 것
    preloadedState: initialState // reducer에서 정해둔 initialState보다 더 앞서 prefix될 state임
});

sagaMiddleware.run(rootSaga);
// saga가 제대로 돌아가려면 꼭 run을 해야 함

export default store;