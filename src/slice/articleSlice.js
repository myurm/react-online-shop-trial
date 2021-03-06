import { createSlice } from "@reduxjs/toolkit";

const name = "article";

const initialState  = {
    id: 0,
    title: "",
    content: "",
    views: 0,
    date: Date.now(), // 년,월,일,시,분,초
    editDate: ""
};

const reducers = {
    // saga에서 감시용
    registerArticle: (state, { payload: article}) => {
        console.table(article);
    },
    // saga에서 서버 저장 후 게시물을 불러오는 action
    registerArticleAsync: (state, { payload }) => {
        console.table(payload);

        return {
            ...state,
            id: payload.id
        };
    },
    // saga에서 감시용
    getArticle: (state, id) => {
        console.table(id);
    },
    // saga에서 호출용 (조회된 내용을 화면에 뿌려주는 역할)
    getArticleAsync: (state, { payload: article }) => {
        console.table("saga에서 put 액션 호출 -- getArticleAsync");
        return {
            ...state,
            id: article.id,
            title: article.title,
            content: article.content,
            date: article.date,
            editDate: article.editDate,
            views: article.views
        }
    },
    // 호출 (서버조회)
    fetchArticle: (state, { payload: id }) => {
        console.table(id);
    },
    // 수정
    updateArticle: (state, { payload: article }) => {
        console.log("게시글 수정 액션 호출 --updateArticle");
    },
    // 삭제
    deleteArticle: (state, { payload: id }) => {
        console.log("게시글 삭제 액션 호출 -- deleteArticle"); // saga에서 감시용
    },
    // title, content input change
    changeRegisterInput: (state, { payload }) => {
        switch (payload.name) {
            case "title": // title case
                return {
                    ...state,
                    title: payload.value
                };
            case "content": // content case
                return {
                    ...state,
                    content: payload.value
                };
            default:
                break;
        }
    }
};

const articleSlice = createSlice({
    name,
    initialState,
    reducers
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;