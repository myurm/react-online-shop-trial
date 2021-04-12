import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd";

function BoardList(props) {
    return (
        <>
            <table style={{
                width: "100%"
            }}>
                <tbody>
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
                            <tr key={article.id}>
                                <td style={{
                                        width: "10%",
                                        textAlign: "center",
                                        paddingTop: "10px",
                                        paddingBottom: "10px"
                                    }}
                                    onClick={() => props.handleArticleTitleClick(article.id)}
                                >{article.id}</td>
                                <Link to={`/article/${article.id}`} style={{
                                    width: "100%",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    display: "block"
                                }}>
                                    <td style={{
                                        color: "#333",
                                        fontWeight: "600"
                                    }}>{article.title}
                                        <span style={{
                                            color: "#ff7070"
                                        }}>&nbsp;{article.comments.length > 0 && `[${article.comments.length}]`}</span>
                                    </td>
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
                </tbody>
            </table>
        </>
    )
}

export default BoardList;