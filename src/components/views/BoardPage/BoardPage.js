import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import BoardList from "./Sections/BoardList";
// BoardList에서 export한 걸 받아와야 함
import { Button, Typography} from "antd";
import { boardActions } from "../../../slice/boardSlice";

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

    // init
    useEffect(() => {
        dispatch(boardActions.getBoard());
    }, [dispatch]);

    return (
        <>
            <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
                <div>
                    <Link to="/register">
                        <Button type="primary">New Post</Button>
                        {/* New Post 클릭 시 /register 로 이동 */}
                    </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Title>Board Title</Title>
                </div>
                <div>
                    {error ? (
                        <h2> 에러 발생: {error} </h2>
                    ) : isSuccess && board.length > 0 ? (
                        <BoardList board={board} />
                    ) : isSuccess && board.length <= 0 ? (
                        <p> 조회할 내용이 없습니다. </p>
                    ) : (
                        <p> 목록을 불러오는 중입니다. </p>
                    )}
                    {/* error, 조회 성공 - 조회 1개 이상/조회 0개 이하, 로딩 */}
                </div>
            </div>
        </>
    )
}

export default BoardPage;