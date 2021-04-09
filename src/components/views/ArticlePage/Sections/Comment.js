import React from 'react'

function Comment(props) {
    console.table(props.comment);
    return (
        <>
            <form>
                <div
                    style={{
                        border: "1px solid #eee",
                        minHeight: "80px"
                    }}
                >
                    <textarea
                        style={{
                            borderStyle: "none",
                            minHeight: "80px",
                            width: "calc(100% - 80px)",
                            float: "left",
                            boxSizing: "border-box",
                            outlineStyle: "none",
                            resize: "none"
                        }}
                        value={props.comment}
                        onChange={props.handleCommentChange}
                    />
                    <button
                        style={{
                            border: "none",
                            width: "80px",
                            height: "80px",
                            display: "inline-block",
                            outlineStyle: "none",
                            cursor: "pointer"
                        }}
                        onClick={props.handleCommentSubmit}
                    >
                        등록
                    </button>
                </div>
            </form>
        </>
    )
}

export default Comment;