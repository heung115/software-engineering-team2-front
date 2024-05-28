import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트
const NoDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #333;
    font-family: Arial, sans-serif;
`;

const NoDataMessage = styled.h1`
    font-size: 44px;
    color: white;
`;

const GoBackButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

// 컴포넌트
function NoDataPage({}) {
    return (
        <NoDataContainer>
            <NoDataMessage>No Data Available</NoDataMessage>
            {/* <GoBackButton onClick={onGoBack}>Go Back to Home</GoBackButton> */}
        </NoDataContainer>
    );
}

export default NoDataPage;
