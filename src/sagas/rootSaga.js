import { takeEvery, takeLatest } from "redux-saga/effects";
// takeEvery란? 들어오는 모든 액션에 대해 특정 작업을 처리해줌 (put은 action을 dispatch하는 거라 다른 개념임)
// takeLatest란? 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행함
import { articleActions } from "../slice/articleSlice";
import { updateArticleAsync, fetchArticleAsync, getArticleAsync, registerArticleAsync } from "./articleSaga";
import { boardActions } from "../slice/boardSlice";
import getBoardAsync from "./boardSaga";

const { registerArticle, getArticle, fetchArticle, updateArticle } = articleActions;
// 변수를 {}로 감싸는 이유는 articleActions 라는 객체에서 모든 key가 아니라 registerArticle만 빼내기 위함임
const { getBoard } = boardActions;

export default function* rootWatcher() {
    yield takeLatest(registerArticle.type, registerArticleAsync);
    // registerArticle.type에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 registerArticleAsync함수를 실행함
    yield takeEvery(getArticle.type, getArticleAsync);
    yield takeEvery(getBoard.type, getBoardAsync);
    yield takeEvery(fetchArticle.type, fetchArticleAsync);
    yield takeLatest(updateArticle.type, updateArticleAsync);
}