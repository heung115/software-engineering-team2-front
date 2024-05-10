import styled from 'styled-components';

const EmailFormGroup = styled.div``;

const EmailLabel = styled.label``;

const EmailInput = styled.input``;

const LoginInputEmail = ({ userEmail, setUserEmail }) => {
    return (
        <EmailFormGroup>
            <EmailLabel htmlFor="userEmail">Email:</EmailLabel>
            <EmailInput
                type="text"
                id="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
            ></EmailInput>
        </EmailFormGroup>
    );
};

export { LoginInputEmail };
