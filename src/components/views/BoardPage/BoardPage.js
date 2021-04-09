import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import BoardList from "./Sections/BoardList";
// BoardList에서 export한 걸 받아와야 함
import { Button, Typography} from "antd";
import { boardActions } from "../../../slice/boardSlice";
import { articleActions } from "../../../slice/articleSlice";

const { Title } = Typography;

function BoardPage() {
    // dispatch, useSelector, useEffect는 무조건 function 안에 지정해야 함
    const dispatch = useDispatch();
    // useState
    const { board, isLoading, isSuccess, error } = useSelector((state) => ({
        board: state.boardReducers.board,
        isLoading: state.boardReducers.isLoading,
        isSuccess: state.boardReducers.isSuccess,
        error: state.boardReducers.error
    }));

    const onDeleteClick = (id) => {
        if (!window.confirm("삭제하시겠습니까?"))

        return false;

        dispatch(articleActions.deleteArticle(id));
    }

    // init
    useEffect(() => {
        dispatch(boardActions.getBoard());
    }, [dispatch]);

    return (
        <>
            <div style={{
                maxWidth: "1200px",
                width: "80%",
                margin: "0 auto",
                paddingTop: "100px"
            }}>
                <div style={{
                    textAlign: "center"
                }}>
                    <Title style={{
                        paddingBottom: "30px",
                        color: "#555",
                        marginBottom: "0"
                    }}>게시판</Title>
                </div>
                <div style={{
                    textAlign: "right",
                    marginBottom: "30px"
                }}>
                    <Link to="/register?isForEdit=false">
                    {/* New Post는 새 글 입력하는 거니까 isForEdit에 false값을 줌 */}
                        <Button type="primary">글쓰기</Button>
                        {/* New Post 클릭 시 /register 로 이동 */}
                    </Link>
                </div>
                <div style={{
                    borderTop: "1px solid #eee"
                }}>
                    {error ? (
                        <h2 style={{
                            color: "#ff4c4c",
                            fontSize: "16px",
                            padding: "100px 0",
                            borderBottom: "1px solid #eee"
                        }}> 에러 발생: {error} </h2>
                    ) : isSuccess && board.length > 0 ? (
                        <BoardList board={board} handleDeleteClick={onDeleteClick} />
                    ) : isSuccess && board.length <= 0 ? (
                        <p style={{
                            textAlign: "center",
                            fontSize: "16px",
                            color: "#777",
                            padding: "100px 0",
                            borderTop: "1px solid #eee",
                            borderBottom: "1px solid #eee"
                        }}> 조회할 내용이 없습니다. </p>
                    ) : (
                        <p style={{
                            textAlign: "center",
                            fontSize: "16px",
                            color: "#777",
                            padding: "100px 0",
                            borderTop: "1px solid #eee",
                            borderBottom: "1px solid #eee"
                        }}> 목록을 불러오는 중입니다... </p>
                    )}
                    {/* error, 조회 성공 - 조회 1개 이상/조회 0개 이하, 로딩 */}
                </div>
            </div>
        </>
    )
}

export default BoardPage;