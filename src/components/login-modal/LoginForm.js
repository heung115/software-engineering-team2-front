import styled from "styled-components";
import { LoginInputEmail } from "./LoginInputEmail";
import { LoginInputPassword } from "./LoginInputPassword";


const LoginFormContainer = styled.form`

`;

const LoginSubmitButton = styled.button`
`;

const LoginForm = ({handleSubmit, userEmail, setUserEmail, userPw, setUserPw}) => {
    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <LoginInputEmail userEmail={userEmail} setUserEmail={setUserEmail}></LoginInputEmail>
            <LoginInputPassword userPw={userPw} setUserPw={setUserPw}></LoginInputPassword>
            <LoginSubmitButton type="submit"> Login </LoginSubmitButton>
        </LoginFormContainer>
    );
}

export { LoginForm }