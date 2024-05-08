import '../styles/LoginTag.css';
import { Component } from 'react';
import Modal from './Modal.js';
import Login from '../pages/Login.js';
import SignupForm from '../pages/SignupForm.js';

class LoginTag extends Component {
    state = {
        isLoginModalOpen: false,
        isSignUpModalOpen: false,
    };

    openLoginModal = () => this.setState({ isLoginModalOpen: true });
    closeLoginModal = () => this.setState({ isLoginModalOpen: false });
    // openSignupModal = () => this.setState({ isSignUpModalOpen: true });
    // closeSignupModal = () => this.setState({ isSignUpModalOpen: false });

    render() {
        return (
            <div className="login-part">
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
                <div className="profile-container">
                    <div className="profile"
                    onClick={this.openLoginModal}></div>
                    <Modal isOpen={this.state.isLoginModalOpen} onClose={this.closeLoginModal}>
                        <Login closeModal={this.closeLoginModal} />
                    </Modal>
                </div>
            </div>
        );
    }
}

export { LoginTag };
