import styled from 'styled-components';
import { SignUpInputEmail } from './SignUpInputEmail';
import { SignUpInputPassword } from './SignUpInputPassword';
import { SignUpInputConFirm } from './SignUpInputConfirm';

const SignUpFormContainer = styled.form``;

const SignUpSubmitButton = styled.button``;

const SignUpForm = ({
    email,
    setEmail,
    userPw,
    setUserPw,
    confirmPw,
    setConfirmPw,
    errors,
    setErrors,
    isLoading,
    handleSubmit,
}) => {
    return (
        <SignUpFormContainer>
            <SignUpInputEmail />
            <SignUpInputPassword />
            <SignUpInputConFirm />
            <SignUpSubmitButton>Sign Up</SignUpSubmitButton>
            {isLoading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <SignUpSubmitButton
                    type="submit"
                    disabled={isLoading}
                ></SignUpSubmitButton>
            )}
        </SignUpFormContainer>
    );
};

export { SignUpForm };
