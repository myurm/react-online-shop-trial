import { createSlice } from "@reduxjs/toolkit";

const name = "comment";

const initialState = {
    id: 0,
    content: "",
    date: Date.now(),
    articleId: 0,
    comments: []
};

const reducers = {
    // saga에서 감시
    registerComment: (state, { payload: comment }) => {
        console.table("댓글 등록 액션 호출 --registerComment");
    },

    // 값 반환
    getCommentsAsync: (state, { payload: list }) => {
        return {
            ...state,
            comments: list
        };
    }
};

const commentSlice = createSlice({
    name,
    initialState,
    reducers
});

export const commentReducers = commentSlice.reducer;
export const commentActions = commentSlice.actions;