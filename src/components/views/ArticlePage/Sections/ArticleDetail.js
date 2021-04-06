// 유지보수하기 쉽도록 ArticlePage.js를 컨테이너 컴포넌트로 사용하고, 프레젠테이셔널 컴포넌트로 이 파일을 추가함

import React from 'react';
import { Button, Typography } from "antd";

const { Title } = Typography;

function ArticleDetail(props) {
    return (
        <div sytle={{ width: "80%", margin: "2rem auto" }}>
            <a href="/">
                <Button type="primary">목록으로 가기</Button>
            </a>
            {/* Link를 안 쓰는 이유는 Link는 리셋이 안 되고 주소 이동만 함
                a태그는 리셋을 하면서 주소 이동을 함
                그래서 resetState를 만들어주면 좋음 */}
            <div sytle={{ textAlign: "center" }}>
                <Title>게시글</Title>
            </div>
            <div>
                <table>
                    <colgroup>
                        <col width="10%" />
                        <col width="40%" />
                        <col width="10%" />
                        <col width="40%" />
                    </colgroup>
                    <tr>
                        <th>번호</th>
                        <td>{props.id}</td>
                        <th>조회수</th>
                        <td>{props.views}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td colSpan="3">{props.title}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan="3">{props.content}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ArticleDetail;