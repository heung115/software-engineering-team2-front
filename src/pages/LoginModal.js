import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/login-modal/LoginForm';
import { LoginEtc } from '../components/login-modal/LoginEtc';

const LoginContainer = styled.div`
    width: 450px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 5px;
    padding-bottom: 20px; 
`;

const LoginTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    font-weigth: bolder;
`;

const SignUpButton = styled.button`
    display: block;
    width: 89.9%;
    padding: 10px;
    border: none;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &.hover {
        background-color: #0056b3;
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
            userPassword: password
        });

        if (res) {
            closeMe();
        } else {
            alert('check your id/pw');
        }
    };

    return (
        <div>
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
            </LoginContainer>
            <LoginEtc googleLogin={handleGoogleLogin}></LoginEtc>
        </div>
    );
};

export default LoginModal;
