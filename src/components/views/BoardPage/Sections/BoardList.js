import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd";

function BoardList(props) {
    return (
        <>
            <table>
                <colgroup>
                    <col width="10%" />
                    <col width="60%" />
                    <col width="10%" />
                    <col width="20%" />
                </colgroup>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>조회수</th>
                </tr>
                {
                    props.board.map((article) => (
                        <tr>
                            <td>{article.id}</td>
                            <Link to={`/article/${article.id}`}>
                                <td>{article.title}</td>
                            </Link>
                            <td>{article.views}</td>
                            <td>
                                <Button onClick={() => props.handleDeleteClick(article.id)}>
                                    X
                                </Button>
                            </td>
                        </tr>
                ))}
            </table>
        </>
    )
}

export default BoardList;