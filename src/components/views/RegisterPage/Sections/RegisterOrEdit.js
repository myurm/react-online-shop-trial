import React from 'react'
import { Link } from "react-router-dom";
import { Button, Input } from "antd";

const { TextArea } = Input;

function RegisterOrEdit(props) {
    return (
        <>
            <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
                <Link to="/">
                    <Button>←</Button>
                </Link>
                <form onSubmit={props.handleSubmit}>
                    {/* onSubmit : form 태그 안에서 form 전송하기 전에 입력된 데이터의 유효성을 체크하기 위해 사용하는 이벤트 */}
                    <br />
                    <div style={{ maxWidth: "700px", margin: "2rem" }}>
                        <label>Title: </label>
                        <Input
                            onChange={props.handleTitleChange}
                            value={props.titleValue}
                            name="title"
                            type="text"
                        />
                            {/* handleTitleChange={onTitleChange}
                                (RegisterPage의 evnet임) */}
                        <hr></hr>
                        <TextArea
                            onChange={props.handleContentChange}
                            value={props.contentValue}
                            name="content"
                        />
                            {/* handleContentChange={onContentChange}
                                (RegisterPage의 evnet임) */}
                            {/* defaultValue : 처음 태그의 value에 입력했던 값 */}
                    </div>
                    <Button type="danger" onClick={props.handleSubmit}>
                        {props.updateRequest ? "수정" : "등록"}
                    </Button>
                </form>
            </div>
        </>
    );
}

export default RegisterOrEdit;