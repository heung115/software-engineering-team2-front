import styled from 'styled-components';

const EmailFormGroup = styled.div``;

const EmailLabel = styled.label``;

const EmailInput = styled.input``;

const ErrorP = styled.p`
`;

const SignUpInputEmail = ({ userEmail, setUserEmail, errors }) => {
    return (
        <EmailFormGroup>
            <EmailLabel htmlFor="userEmail">Email:</EmailLabel>
            <EmailInput
                type="text"
                id="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
            ></EmailInput>
            {errors.email && <ErrorP>{errors.email}</ErrorP>}
        </EmailFormGroup>
    );
};

export { SignUpInputEmail };
