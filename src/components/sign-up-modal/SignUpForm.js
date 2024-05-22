import styled, { keyframes } from 'styled-components';
import { SignUpInputEmail } from './SignUpInputEmail';
import { SignUpInputPassword } from './SignUpInputPassword';
import { SignUpInputConFirm } from './SignUpInputConfirm';
import { SubmitButton } from '../../styles/ButtonDesign';

const SignUpFormContainer = styled.form`
    position: relative;
    background-color: #fff;
`;

const SignUpLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
`;

const SpinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SignUpLoader = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: ${SpinAnimation} 2s linear infinite;
`;

const SubmitButtonPadding = styled(SubmitButton)`
    width: 90%;
    margin: 0 auto;
    display: block;
`;

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
        <SignUpFormContainer onSubmit={handleSubmit}>
            <SignUpInputEmail
                userEmail={email}
                setUserEmail={setEmail}
                errors={errors}
            />
            <SignUpInputPassword
                userPw={userPw}
                setUserPw={setUserPw}
                errors={errors}
            />
            <SignUpInputConFirm
                userConfirm={confirmPw}
                setUserConfirm={setConfirmPw}
                errors={errors}
            />
            {isLoading ? (
                <SignUpLoaderContainer>
                    <SignUpLoader></SignUpLoader>
                </SignUpLoaderContainer>
            ) : (
                <SubmitButtonPadding type="submit" disabled={isLoading}>
                    Sign Up
                </SubmitButtonPadding>
            )}
        </SignUpFormContainer>
    );
};

export { SignUpForm };
