import React from 'react';
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../services/SessionProvider';
import Modal from '../Modal';
import LoginModal from '../../pages/LoginModal';
import { SignUpModal } from '../../pages/SignupModal';
import { SelectGenreModal } from '../../pages/SelectGenreModal';
import { useLogin } from '../../hooks/useLogin';
import { supabase } from '../../services/Supabase';

const LoginButton = styled.div`
    // margin-top: 25px;
    width: 100px;
    height: 30px;
    border: 1px solid white;
    border-radius: 15px;
    background: transparent;
    color: white;
    font-weight: bold;
    line-height: 30px;
    user-select: none;
    transition: all 0.3s ease;
    &:hover {
        border: 1px solid black;
        background: white;
        color: black;
        font-weight: bold;
    }
`;

const LoginArea = () => {
    // 로그인 화면 관련 정보
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    // 회원가입 관련 정보
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const openSignupModal = () => {
        setIsLoginModalOpen(false);
        setIsSignupModalOpen(true);
    };
    const closeSignupModal = () => setIsSignupModalOpen(false);

    // 선호하는 장르 선택 화면 관련
    const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
    const openSelectModal = () => setIsSelectModalOpen(true);
    const closeSelectModal = () => setIsSelectModalOpen(false);

    // 현재 로그인 사용자 세션
    const { handleLogOut } = useLogin();
    const session = useContext(SessionContext);

    // 현재 사용자의 isSelect에 따라서 팝업 여부
    useEffect(() => {
        if (session['isLogin']) {
            getNeedSelect();
        }
    }, [session])

    const getNeedSelect = async () => {
        let {data, error} = await supabase.from('userinfo')
        .select('need_select').eq('id', session['userId']);

        console.log(data);

        if (!error) {
            setIsSelectModalOpen(data[0]['need_select']);
        }
    }

    return (
        <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
            {session.isLogin ? (
                <LoginButton onClick={handleLogOut}>Logout</LoginButton>
            ) : (
                <LoginButton onClick={openLoginModal}>Login</LoginButton>
            )}

            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <LoginModal
                    closeMe={closeLoginModal}
                    openSignup={openSignupModal}
                />
            </Modal>
            <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
                <SignUpModal closeMe={closeSignupModal} />
            </Modal>
            <Modal isOpen={isSelectModalOpen} onClose={openSelectModal}>
                <SelectGenreModal closeMe={closeSelectModal}></SelectGenreModal>
            </Modal>
        </div>
    );
};

export default LoginArea;
