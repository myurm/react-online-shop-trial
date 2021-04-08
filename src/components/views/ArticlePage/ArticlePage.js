import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";
import ArticleDetail from "./Sections/ArticleDetail";
import Comment from "./Sections/Comment";
import { commentActions } from "../../../slice/commentSlice";

// match란? <Route path>와 URL이 매칭된 것에 대한 정보가 담겨있음
// location이란? 현재 페이지의 정보를 갖고 있음 (location.search로 현재 url의 query string을 가져올 수 있음)
    // pathname: "현재 페이지의 경로명"
    // search: "현재 페이지의 query string"
    // hash: "현재 페이지의 hash"
function ArticlePage ({match, location}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(articleActions.getArticle(match.params.articleId));
    }, [match.params.articleId]);

    // 게시글
    const { id, title, content, date } = useSelector((state) => ({
        id: state.articleReducers.id,
        title: state.articleReducers.title,
        content: state.articleReducers.content,
        date: state.articleReducers.date
    }), shallowEqual
    )
    const views = useSelector((state) => state.articleReducers.views);

    // 삭제
    const onDeleteClick = (id) => {
        if (!window.confirm("삭제하시겠습니까?")) // window 안에 alret, confirm 등이 있음

        return false;

        dispatch(articleActions.deleteArticle(id));
    }

    // 댓글
    const [CommentValue, setCommentValue] = useState("");

    const onCommentChange = (e) => {
        setCommentValue(e.currentTarget.value);
    }

    const onCommentSubmit = () => {
        if( CommentValue === "" || CommentValue === null || CommentValue === undefined ) {
            alert("댓글을 입력하십시오.");
            return false;
        }
        const comment = {
            id: 0,
            content: CommentValue,
            date: Date.now(),
            articleId: id,
        };
        dispatch(commentActions.registerComment(comment));
    };

    return (
        <div style={{ width: "80%", margin: "3rem auto" }}>
            <div>
                <ArticleDetail
                    id={id}
                    title={title}
                    content={content}
                    date={date}
                    views={views}
                    handleDeleteClick={onDeleteClick}
                    handleComment={
                        <Comment
                            comment={CommentValue}
                            handleCommentChange={onCommentChange}
                            handleCommentSubmit={onCommentSubmit}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default ArticlePage;