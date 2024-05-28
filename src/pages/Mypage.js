import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #5c16c5; // 주요 배경색은 보라색
    color: white; // 텍스트 색상은 흰색
    font-family: 'Arial', sans-serif;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    background-color: #6d22d3; // 프로필 박스 배경색
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin-bottom: 10px;
`;

const Name = styled.h1`
    font-size: 24px;
    margin: 10px 0;
`;

const Email = styled.p`
    font-size: 18px;
    margin: 5px 0;
`;

const LastLogin = styled.p`
    font-size: 14px;
    color: #ccc; // 더 연한 회색으로 마지막 로그인 시간 표시
`;
// React 컴포넌트
const Mypage = (data) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setUser({
                name: userData.user_metadata.full_name,
                email: userData.email,
                avatarUrl: userData.user_metadata.avatar_url,
                lastLogin: `Last signed in: ${new Date(
                    userData.last_sign_in_at,
                ).toLocaleString()}`,
            });
        }
    }, []);

    return (
        <PageContainer>
            <ProfileContainer>
                <Avatar src={user.avatarUrl} alt="User's Avatar" />
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
                <LastLogin>{user.lastLogin}</LastLogin>
            </ProfileContainer>
        </PageContainer>
    );
};

export default Mypage;
