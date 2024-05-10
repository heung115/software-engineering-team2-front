import React from 'react';
import { useState } from 'react';
import Modal from '../components/Modal';
import { SignUpModal } from './SignUpModal.js';
import styled from 'styled-components';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/login-modal/LoginForm';
import { LoginEtc } from '../components/login-modal/LoginEtc';

const LoginContainer = styled.div`
    width: 300px;
    margin: 0 auto;
    border: 1px solid black;
`;

const SignUpButton = styled.button`
`;


const LoginModal = ({ closeMe }) => {
    // 내가 가지고 있는 정보
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 회원가입 관련 가지는 정보
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const openSignupModal = () => setIsSignupModalOpen(true);
    const closeSignupModal = () => setIsSignupModalOpen(false);

    // 로그인 관련 함수 들
    const { handleGoogleLogin, handleIdPwLogin, handleLogOut } = useLogin();

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
        <div>
            <LoginContainer>
                <h2>Login</h2>
                <LoginForm
                    handleSubmit={handleSubmit}
                    userEmail={email}
                    setUserEmail={setEmail}
                    userPw={password}
                    setUserPw={setPassword}
                ></LoginForm>
                <SignUpButton onClick={openSignupModal}>Sign Up</SignUpButton>
            </LoginContainer>
            <LoginEtc></LoginEtc>
            <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
                <SignUpModal closeModal={closeSignupModal} />
            </Modal>
        </div>
    );
};

export default LoginModal;
