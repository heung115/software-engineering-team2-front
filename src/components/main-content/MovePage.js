import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 20px 0;
`;

const MoveButton = styled.button`
    background-color: #333; // 검은색 배경
    color: #fff; // 흰색 글자
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    opacity: 0.8; // 투명도 0.8
    transition: opacity 0.3s ease; // 투명도 변화 효과
    border-radius: 6px; // 태두리를 둥글게
    &:hover {
        opacity: 1; // 호버 시 투명도 1
    }
`;
const MovePage = ({ decPage, incPage }) => {
    return (
        <Main>
            <MoveButton className="move-left" onClick={decPage}>
                {'<'}
            </MoveButton>
            <MoveButton className="move-right" onClick={incPage}>
                {'>'}
            </MoveButton>
        </Main>
    );
};

export default MovePage;
