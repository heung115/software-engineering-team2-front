// SignupForm.js
import React, { useState } from 'react';
import '../styles/SignupForm.css';
import styled from 'styled-components';
import useSignup from '../hooks/useSignup';
import { SignUpForm } from '../components/sign-up-modal/SignUpForm';

const SignUpContainer = styled.div`
    width: 300px;
    margin: 0 auto;
    border: 1px solid black;
`;

const SignUpModal = ({closeMe}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { signup, validateForm, isLoading, isSuccess } = useSignup();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (validateForm(email, password, confirmPassword, setErrors)) {
            signup(email, password, closeMe);
        }
    };

    return (
        <SignUpContainer>
            <h2>Sign Up</h2>
            {isSuccess && <p>Signup successful!</p>}
            <SignUpForm
            email={email}
            setEmail={setEmail}
            userPw={password}
            setUserPw={setPassword}
            confirmPw={confirmPassword}
            setConfirmPw={setConfirmPassword}
            errors={errors}
            setErrors={setErrors}
            isLoading={isLoading}
            handleSubmit={handleSubmit} />
        </SignUpContainer>
    );
}

export { SignUpModal }
