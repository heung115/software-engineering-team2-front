import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/login-modal/LoginForm';
import { LoginEtc } from '../components/login-modal/LoginEtc';

const LoginContainer = styled.div`
    width: 450px;
    margin: 100px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px; /* Rounded corners for a modern look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const LoginTitle = styled.h2`
    text-align: center;
    margin-bottom: 40px;
    // color: #fff;
    font-weight: bold;
    font-size: 34px; /* Larger font size for prominence */
`;

const SignUpButton = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #79589f;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #6b4b87;
    }
`;

const LoginModal = ({ closeMe, openSignup }) => {
    // 내가 가지고 있는 정보
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 로그인 관련 함수 들
    const { handleGoogleLogin, handleIdPwLogin } = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await handleIdPwLogin({
            userEmail: email,
            userPassword: password,
        });

        if (res) {
            closeMe();
        } else {
            alert('check your id/pw');
        }
    };

    return (
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <LoginForm
                handleSubmit={handleSubmit}
                userEmail={email}
                setUserEmail={setEmail}
                userPw={password}
                setUserPw={setPassword}
            ></LoginForm>
            <SignUpButton onClick={openSignup}>Sign Up</SignUpButton>
            <LoginEtc googleLogin={handleGoogleLogin}></LoginEtc>
        </LoginContainer>
    );
};
export default LoginModal;
