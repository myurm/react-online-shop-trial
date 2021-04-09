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
    // 댓글 입력
    registerComment: (state, { payload: comment }) => {
        console.table("댓글 등록 액션 호출 --registerComment");
    },
    getCommentsAsync: (state, { payload: list }) => {
        return {
            ...state,
            comments: list
        };
    },

    // 댓글 조회
    getComments: (state, { payload: articleId }) => {
        console.log("댓글 불러오기 액션 호출 --getComments")
    },

    // 댓글 삭제
    deleteComment: (state, { payload: id }) => {
        console.log("댓글 삭제 액션 호출 -- deleteComment");
    }
};

const commentSlice = createSlice({
    name,
    initialState,
    reducers
});

export const commentReducers = commentSlice.reducer;
export const commentActions = commentSlice.actions;