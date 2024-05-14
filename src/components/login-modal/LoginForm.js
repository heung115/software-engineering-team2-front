import styled from 'styled-components';
import { LoginInputEmail } from './LoginInputEmail';
import { LoginInputPassword } from './LoginInputPassword';

const LoginFormContainer = styled.form`
    position: relative;
`;

const LoginSubmitButton = styled.button`
    display: block;
    width: 89.9%;
    padding: 10px;
    border: none;
    margin: 0 auto;
    margin-bottom: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &.hover {
        background-color: #0056b3;
    }
`;

const LoginForm = ({
    handleSubmit,
    userEmail,
    setUserEmail,
    userPw,
    setUserPw,
}) => {
    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <LoginInputEmail
                userEmail={userEmail}
                setUserEmail={setUserEmail}
            ></LoginInputEmail>
            <LoginInputPassword
                userPw={userPw}
                setUserPw={setUserPw}
            ></LoginInputPassword>
            <LoginSubmitButton type="submit"> Login </LoginSubmitButton>
        </LoginFormContainer>
    );
};

export { LoginForm };
