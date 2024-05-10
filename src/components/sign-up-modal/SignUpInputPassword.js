import styled from 'styled-components';

const PwFormGroup = styled.div``;

const PwLabel = styled.label``;

const PwInput = styled.input``;

const ErrorP = styled.p`
`;

const SignUpInputPassword = ({ userPw, setUserPw, errors }) => {
    return (
        <PwFormGroup>
            <PwLabel htmlFor="userSignUpPw">Password:</PwLabel>
            <PwInput
                type="text"
                id="userSignPw"
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
                required
            ></PwInput>
            {errors.password && <ErrorP>{errors.password}</ErrorP>}
        </PwFormGroup>
    );
};

export { SignUpInputPassword };
