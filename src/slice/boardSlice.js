import { createSlice } from "@reduxjs/toolkit";

const name = "boardSlice";

const initialState = {
    board: [],
    isLoading: true,
    isSuccess: false,
    error: null
}

const reducers = {
    // view에서 action 실행
    getBoard: () => {
    },

    // saga에서 action 실행
    getBoardSuccessAsync: (state, { payload: data }) => {
        return { // state로 반환
            ...state,
            board: data, // saga에서 데이터 값을 갖고 옴
            isLoading: false, // Loading 데이터 로딩 false 값을 state로 넘겨줌
            isSuccess: true // Success 데이터 성공 true 값을 state로 넘겨줌
        }
    },
    getBoardFailedAsync: (state, { payload: erorr }) => {
        return {
            ...state,
            isLoading: false,
            error: "error"
        }
    }
}

const boardSlice = createSlice({
    name,
    initialState,
    reducers
})

export const boardReducers = boardSlice.reducer;
export const boardActions = boardSlice.actions;