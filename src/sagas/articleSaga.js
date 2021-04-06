import { call, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { articleActions } from "../slice/articleSlice";
import history from "../utils/history";

// 저장
export function* registerArticleAsync(action) {
    const data = action.payload;

    const rspn = yield Axios.post(`http://localhost:4000/board/`, data);

    yield alert("저장되었습니다.");

    console.table(rspn.data.id);

    yield history.push(`/article/${rspn.data.id}`, rspn.data.id);
    // push(url, object) 여기에서 object는 state로 보내짐
}

// 조회
export function* getArticleAsync(action) {
    const id = action.payload;

    const rspn = yield Axios.get(`http://localhost:4000/board/${id}`);

    const rqst = yield Axios.put(`http://localhost:4000/board/${id}`, {
        ...rspn.data,
        views: parseInt(rspn.data.views) + 1
        // parseInt는 string을 int로 바꿔줌
    });

    // console.table(rspn.data);

    yield put(articleActions.getArticleAsync(rspn.data));
    yield put(articleActions.getArticleAsync(rqst.data));
}

// 호출(수정)
export function* fetchArticleAsync(action) {
    console.log(action);
    
    const id = action.payload;
    
    const response = yield Axios.get(`http://localhost:4000/board/${id}`);
    
    yield put(articleActions.getArticleAsync(response.data));
}