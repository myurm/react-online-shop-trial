import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd";

function BoardList(props) {
    return (
        <>
            <table style={{
                width: "100%"
            }}>
                <tr style={{
                    borderBottom: "1px solid #eee"
                }}>
                    <th style={{
                        width: "10%",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        color: "#555"
                    }}>번호</th>
                    <th style={{
                        width: "77%",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        color: "#555"
                    }}>제목</th>
                    <th style={{
                        width: "10%",
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        color: "#555"
                    }}>조회</th>
                    <th style={{
                        width: "3%"
                    }}></th>
                </tr>
                {
                    props.board.map((article) => (
                        <tr>
                            <td style={{
                                width: "10%",
                                textAlign: "center",
                                paddingTop: "10px",
                                paddingBottom: "10px"
                            }}>{article.id}</td>
                            <Link to={`/article/${article.id}`} style={{
                                width: "100%",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                display: "block"
                            }}>
                                <td style={{
                                    verticalAlign: "middle"
                                }}>{article.title}</td>
                            </Link>
                            <td style={{
                                width: "10%",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                textAlign: "center"
                            }}>{article.views}</td>
                            <td>
                                <span onClick={() => props.handleDeleteClick(article.id)} style={{
                                    cursor: "pointer"
                                }}>
                                    ⨉
                                </span>
                            </td>
                        </tr>
                ))}
            </table>
        </>
    )
}

export default BoardList;