import { put } from "@redux-saga/core/effects";
import Axios from "axios";
import { boardActions } from "../slice/boardSlice";

// 리스트만 조회할 때
// export default function* getBoardAsync() {
//     try {
//         const rspn = yield Axios.get(`http://localhost:4000/board/`);

//         yield put(boardActions.getBoardSuccessAsync(rspn.data));
//     } catch(e) {
//         yield put(boardActions.getBoardFailedAsync(e.message));
//     }
// };

//  ===================================================================== //

// 리스트, 댓글 조회할 때
export default function* getBoardAsync() {
    try {
        const responseForBoard = yield Axios.get(`http://localhost:4000/board/`); // board 조회
        const responseForComment = yield Axios.get(`http://localhost:4000/comment`); // comment 조회

        const boardData = responseForBoard.data; // board 조회 데이터를 boardData로 복사
        const commentData = responseForComment.data; // comment 조회 데이터를 boardData로 복사

        if (commentData.length > 0) {
            let i = 0;
            for (var article of boardData) {
                let comments = [];
                for (var comment of commentData) {
                    if(comment.articleId === article.id) {
                    // 댓글 안에 있는 data 중 comment 안에 있는 articleId 가 게시글 안에 있는 data 중 article 안에 id가 같은가?
                        comments.push(comment);
                        // 위에서 선언한 변수 안에 comment 안에 있는 id를 comments에 넣고, comments를 boardData에 넣어서 action.payload로 갖고 올 예정
                    }
                }
                boardData[i]["comments"] = comments;
                // comments의 key를 [i]에 넣고, value를 [commnets]에 넣음
                i++;
            }
            yield put(boardActions.getBoardSuccessAsync(boardData)); // length를 보내줘도 됨
        }
    } catch(e) {
        yield put(boardActions.getBoardFailedAsync(e.message));
    }
}