import React from 'react';
import { useState, useContext } from 'react';
import { SessionContext } from '../../services/SessionProvider';
import Modal from '../Modal';
import LoginModal from '../../pages/LoginModal';
import { useLogin } from '../../hooks/useLogin';


const LoginArea = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const { handleLogOut } = useLogin();
    const session = useContext(SessionContext)

    return (
        <div>
            {
                session.isLogin?
                <button onClick={handleLogOut}>로그아웃</button>
                :
                <button onClick={openLoginModal}>로그인</button>
            }
            
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <LoginModal closeMe={closeLoginModal} />
            </Modal>
        </div>
    );
};

export default LoginArea;
