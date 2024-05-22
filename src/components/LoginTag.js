import { Component } from 'react';
import styled from 'styled-components';

import Modal from './Modal.js';
import Login from '../pages/Login.js';
import SignupForm from '../pages/SignupForm.js';

const StyledModal = styled(Modal)`
    width: 600px;
    height: 400px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

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
            <div className="profile-container">
                {/* <div className="profile" onClick={this.openLoginModal}></div> */}
                <StyledModal
                    isOpen={this.state.isLoginModalOpen}
                    onClose={this.closeLoginModal}
                >
                    <Login closeModal={this.closeLoginModal} />
                </StyledModal>
            </div>
        );
    }
}

export { LoginTag };
