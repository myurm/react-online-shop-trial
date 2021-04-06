import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { articleActions } from "../../../slice/articleSlice";
import ArticleDetail from "./Sections/ArticleDetail";

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

    const { id, title, content } = useSelector((state) => ({
        id: state.articleReducers.id,
        title: state.articleReducers.title,
        content: state.articleReducers.content
    }))

    const date = useSelector((state) => state.articleReducers.date);
    const views = useSelector((state) => state.articleReducers.views);

    return (
        <div style={{ width: "80%", margin: "3rem auto" }}>
            <div>
                <ArticleDetail
                    id={id}
                    title={title}
                    content={content}
                    date={date}
                    views={views}
                />
            </div>
            <div style={{ margin: "2rem auto" }}>
                <Link to={`/edit/${id}?isForEdit=true`}>
                    <Button type="primary">수정</Button>
                </Link>
            </div>
        </div>
    );
}

export default ArticlePage;