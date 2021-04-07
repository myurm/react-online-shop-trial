import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import { articleActions } from "../../../slice/articleSlice";

function RegisterPage(props) {
    console.log(props);
    
    const dispatch = useDispatch();
    
    const { id, title, content, views, date, editDate } = useSelector((state) => ({
        id: state.articleReducers.id,
        title: state.articleReducers.title,
        content: state.articleReducers.content,
        views: state.articleReducers.views,
        date: state.articleReducers.date,
        editDate: state.articleReducers.editDate
    }),
    shallowEqual
    );
    
    // state (useState란? useSelector와 비슷한 hook이고 slice의 action을 사용하지 않음)
    const [TitleValue, setTitleValue] = useState(title);
    const [ContentValue, setContentValue] = useState(content);
        // TitleValue/ContentValue가 key이고, useState() 안의 값이 value임 (""일 경우 TitleValue/ContentValue의 값은 ""(공백)임)
        // setTitleValue는 action 역할과 같음
    const [IsForUpdate, setIsForUpdate] = useState(false);
        // IsForUpdate는 새 글 등록인지, 수정인지 구별할 flag임

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        if (searchParams.get("isForEdit") === "true") {
            dispatch(articleActions.fetchArticle(props.match.params.articleId));
            setIsForUpdate(true);
        }
        setTitleValue(title);
        setContentValue(content);
    }, [id]);

    // event
    const onTitleChange = (e) => {
        setTitleValue(e.currentTarget.value);
    }
    
    const onContentChange = (e) => {
        setContentValue(e.currentTarget.value);
    }

    const onSubmitArticle = (e) => {
        e.preventDefault();

        if (TitleValue === "" || TitleValue === null || TitleValue === undefined) {
            alert("제목을 작성하세요.");
            return false;
        }

        if (
            ContentValue === "" || ContentValue === null || ContentValue === undefined) {
            alert("내용을 작성하세요.");
            return false;
        }

        // preventDefault란? a과 submit는 페이지를 이동시키는 동작과, form과 input 등은 전송하는 동작을 하는데 이런 동작들을 중단시킴
        const article = {
            id: id,
            title: TitleValue,
            content: ContentValue,
            views: views,
            date: date,
            editDate: IsForUpdate ? Date.now() : editDate // 수정이면 현재 시간으로 Date.now()하고, 아니면 "" (state값)
        };

        if(IsForUpdate) {
            dispatch(articleActions.updateArticle(article)); // 수정
        } else {
            dispatch(articleActions.registerArticle(article)); // 새로운 글 저장
        }
    };

    return (
        <>
            <RegisterOrEdit
                titleValue={TitleValue}
                contentValue={ContentValue}
                handleTitleChange={onTitleChange}
                handleContentChange={onContentChange}
                handleSubmit={onSubmitArticle}
                updateRequest={IsForUpdate}
            />
            {/* RegisterOrEdit에 titleValue, contentValue, handleTitleChange, handleContentChange을 넘겨줌
                RegisterOrEdit는 props로 받아와야 함 */}
        </>
    );
}

export default RegisterPage;