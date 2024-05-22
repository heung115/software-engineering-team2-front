import styled from 'styled-components';
import { LoginInputEmail } from './LoginInputEmail';
import { LoginInputPassword } from './LoginInputPassword';
import { SubmitButton } from '../../styles/ButtonDesign';
const LoginFormContainer = styled.form`
    position: relative;
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
            <SubmitButton type="submit"> Login </SubmitButton>
        </LoginFormContainer>
    );
};

export { LoginForm };
