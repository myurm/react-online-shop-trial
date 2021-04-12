// 유지보수하기 쉽도록 ArticlePage.js를 컨테이너 컴포넌트로 사용하고, 프레젠테이셔널 컴포넌트로 이 파일을 추가함

import React from 'react';
import { Button, Typography } from "antd";
import { Link } from 'react-router-dom';

const { Title } = Typography;

function ArticleDetail(props) {

    return (
        <div sytle={{
            width: "100%"
        }}>
            <a href="/" style={{
                marginBottom: "30px",
                display: "block"
            }}>
                <Button type="default">목록</Button>
            </a>
            {/* Link를 안 쓰는 이유는 Link는 리셋이 안 되고 주소 이동만 함
                a태그는 리셋을 하면서 주소 이동을 함
                그래서 resetState를 만들어주면 좋음 */}
            <div style={{
                marginBottom: "10px"
            }}>
                <span style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "#888"
                }}>글번호</span>
                <span style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "#888"
                }}>{props.id}</span>
            </div>
            <div>
                <Title style={{
                    fontSize: "20px",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "15px",
                }}>{props.title}</Title>
            </div>
            <div style={{
                minHeight: "300px",
            }}>
                <div style={{
                    display: "block"
                }}>
                    <div style={{
                        float: "left"
                    }}>
                        <span style={{
                            color: "#aaa"
                        }}>{new Date(props.date).toLocaleString()}</span>
                    </div>
                    <div style={{
                        float: "right"
                    }}>
                        <span style={{
                            color: "#aaa",
                            marginRight: "10px",
                            display: "inline-block"
                        }}>조회</span>
                        <span style={{
                            color: "#aaa"
                        }}>{props.views}</span>
                    </div>
                </div>
                <div style={{
                    display: "inline-block",
                    width: "100%",
                    marginTop: "20px"
                }}>
                    <span colSpan="3">{props.content}</span>
                </div>
            </div>
            <div style={{ margin: "2rem auto" }}>{props.handleComment}</div>
            <div>
                {props.loadComments.length > 0 && props.loadComments.map((comment) => (
                    <div style={{
                        width: "100%",
                        backgroundColor: "#fafafa",
                        marginBottom: "5px",
                        padding: "10px",
                        boxShadow: "0px 0px 5px #00000005",
                        border: "1px solid #eee"
                    }}>
                        <span key={comment.id}>
                            <span>{comment.content}</span>
                            <div style={{
                                float: "right"
                            }}>
                                <span style={{
                                    marginRight: "20px",
                                    fontSize: "12px",
                                    color: "#aaa"
                                }}>{new Date(comment.date).toLocaleString()}</span>
                                <span onClick={() => props.deleteComment(comment.id)} style={{
                                    cursor: "pointer",
                                    color: "#555"
                                }}>⨉</span>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
            <div style={{
                margin: "2rem auto",
                textAlign: "right"
            }}>
                <Link to={`/edit/${props.id}?isForEdit=true`}>
                    <Button type="primary">수정</Button>
                </Link>
                <Button style={{ marginLeft: "10px" }} onClick={() => props.handleDeleteClick(props.id)} type="default">삭제</Button>
            </div>
        </div>
    );
}

export default ArticleDetail;