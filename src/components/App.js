import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticlePage from "./views/ArticlePage/ArticlePage";
import BoardPage from "./views/BoardPage/BoardPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import "../App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={BoardPage} />
        {/* 화면에 들어가자마자 BoardPage가 뜰 수 있게 함
            경로 뒤에 / 로 구분하여 연결 (localhost:907/) */}
        <Route exact path="/article/:articleId" component={ArticlePage} />
        {/* 게시글 id를 프로퍼티로 받아 사용할 것이기 때문에 "/article/:articleId"로 적음
            list에서 게시글을 클릭하면 url처럼 localhost:907/article/1 <- id 형식으로 들어감*/}
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/edit/:articleId" component={RegisterPage} />
      </Switch>
    </>
  );
}

export default App;