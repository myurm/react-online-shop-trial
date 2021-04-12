import React from 'react'
import { Link } from "react-router-dom";
import { Button, Input } from "antd";

const { TextArea } = Input;

function RegisterOrEdit(props) {
    return (
        <>
            <div style={{
                maxWidth: "1200px",
                width: "100%",
                margin: "0 auto",
                paddingTop: "100px"
            }}>
                <a href="/">
                    <Button>←</Button>
                </a>
                <form onSubmit={props.handleSubmit}>
                    {/* onSubmit : form 태그 안에서 form 전송하기 전에 입력된 데이터의 유효성을 체크하기 위해 사용하는 이벤트 */}
                    <br />
                    <div style={{
                        width: "100%",
                    }}>
                        <label>제목</label>
                        <Input
                            onChange={props.handleRegisterChange}
                            value={props.titleValue}
                            name="title"
                            type="text"
                        />
                            {/* handleTitleChange={onTitleChange}
                                (RegisterPage의 evnet임) */}
                        <label style={{
                            marginTop: "30px",
                            display: "block"
                        }}>내용</label>
                        <TextArea
                            onChange={props.handleRegisterChange}
                            value={props.contentValue}
                            name="content"
                            style={{
                                minHeight: "800px",
                                resize: "none"
                            }}
                        />
                            {/* handleContentChange={onContentChange}
                                (RegisterPage의 evnet임) */}
                            {/* defaultValue : 처음 태그의 value에 입력했던 값 */}
                    </div>
                    <Button type="danger" onClick={props.handleSubmit} style={{
                        float: "right",
                        display: "block",
                        marginTop: "30px",
                    }}>
                        {props.updateRequest ? "수정" : "등록"}
                    </Button>
                </form>
            </div>
        </>
    );
}

export default RegisterOrEdit;