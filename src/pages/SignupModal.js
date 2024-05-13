// SignupForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import useSignup from '../hooks/useSignup';
import { SignUpForm } from '../components/sign-up-modal/SignUpForm';

const SignUpContainer = styled.div`
    width: 450px;
    height: auto;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 5px;
`;

const SignUpTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    font-weigth: bolder;
`;

const SignUpModal = ({ closeMe }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { signup, validateForm, isLoading, isSuccess } = useSignup();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm(email, password, confirmPassword, setErrors)) {
            // signup(email, password, closeMe);
            const res = await signup({email: email, password: password, onSuccess: closeMe})

            if (res) {
                alert("Signup successful!");
            } else {
                alert("This is a duplicate ID.");
            }

        }
    };

    return (
        <SignUpContainer>
            <SignUpTitle>Sign Up</SignUpTitle>
            {/* {isSuccess && <p>Signup successful!</p>} */}
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
                handleSubmit={handleSubmit}
            />
        </SignUpContainer>
    );
};

export { SignUpModal };
