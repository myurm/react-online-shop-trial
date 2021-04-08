import { combineReducers } from "redux";
import { articleReducers } from "./articleSlice";
import { boardReducers } from "./boardSlice";
import { commentReducers } from "./commentSlice"

const rootReducer = combineReducers({ articleReducers, boardReducers, commentReducers });
// combineReducers란? 모든 리듀서를 호출함
// rootReducer라는 변수를 만들어 리듀서를 묶어줌 (지금은 articleReducers 하나뿐이라서 articleSlice만 불러옴)

export default rootReducer;