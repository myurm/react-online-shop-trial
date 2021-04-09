import Axios from "axios";
import history from "../utils/history";
import { put } from "redux-saga/effects";
import { commentActions } from "../slice/commentSlice";

// 데이터 저장
export function* registerCommentAsync(action) {
    const data = action.payload;

    yield Axios.post(`http://localhost:4000/comment/`, data);

    history.go(0); // 새로고침
}

// 데이터 조회
export function* getCommentsAsync(action) {
    const articleId = action.payload;

    const rspn = yield Axios.get(`http://localhost:4000/comment?articleId${articleId}`);

    yield put(commentActions.getCommentsAsync(rspn.data));
}

// 데이터 삭제
export function* deleteCommentAsync(action) {
    const commentId = action.payload;

    yield Axios.delete(`http://localhost:4000/comment/${commentId}`);

    history.go(0); // 새로고침
}