import React from 'react';
import { useState } from 'react';
import { supabase } from '../services/Supabase';
import '../styles/LoginForm.css';
import Modal from '../components/Modal';
import SignupForm from './SignupForm';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const openSignupModal = () => setIsSignupModalOpen(true);
    const closeSignupModal = () => setIsSignupModalOpen(false);

    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000',
                data: {
                    user_name: null,
                    avatar_url: null,
                },
            },
        });

        if (error) {
            console.error('Error logging in:', error.message);
        } else {
            console.log('Login data:', data);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // 여기에 로그인 로직을 추가할 수 있습니다.
        console.log('Submitted: ', username, password);
    };
    const logOut = async () => {
        const { error } = await supabase.auth.signOut();
        alert('로그아웃 되었습니다');
    };
    return (
        <div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Email:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">
                        Login
                    </button>
                </form>
                <button
                    className="login-button"
                    onClick={openSignupModal}
                >
                    Sign Up
                </button>
            </div>
            <div className="login-etc">
                <img
                    className="login-google-logo"
                    src="https://d1nuzc1w51n1es.cloudfront.net/d99d8628713bb69bd142.png"
                    onClick={handleGoogleLogin}
                ></img>
                <div className="login-google-text" onClick={handleGoogleLogin}>
                    Login with Google
                </div>
            </div>

            <Modal
                isOpen={isSignupModalOpen}
                onClose={closeSignupModal}
            >
                <SignupForm closeModal={closeSignupModal} />
            </Modal>
        </div>
    );
}

export default Login;
