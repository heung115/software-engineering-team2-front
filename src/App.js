import React, { useState } from 'react';
import { MainPage } from './pages/MainPage';
import './App.css';

const App = () => {
    // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    // const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    // const openLoginModal = () => setIsLoginModalOpen(true);
    // const closeLoginModal = () => setIsLoginModalOpen(false);
    // const openSignupModal = () => setIsSignupModalOpen(true);
    // const closeSignupModal = () => setIsSignupModalOpen(false);
    return (
        <div className="App">
            {/* <h1>Supabase Auth Example</h1>
            <UserProfile />
            <br></br>
            <div className="button-container">
                <button onClick={openLoginModal}>Login</button>
                <button onClick={openSignupModal}>Sign Up</button>
            </div>
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <Login />
            </Modal>
            <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
                <SignupForm closeModal={closeSignupModal} />
            </Modal> */}
            {/* <HeaderTag /> */}
            <MainPage />
        </div>
    );
};

export default App;
