import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { boardActions } from "../slice/boardSlice";

export default function* getBoardAsync() {
    try {
        const rspn = yield axios.get(`http://localhost:4000/board/`);

        yield put(boardActions.getBoardSuccessAsync(rspn.data));
    } catch(e) {
        yield put(boardActions.getBoardFailedAsync(e.message));
    }
};