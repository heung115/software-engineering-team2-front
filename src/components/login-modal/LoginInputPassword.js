import styled from 'styled-components';

const PwFormGroup = styled.div``;

const PwLabel = styled.label``;

const PwInput = styled.input``;

const LoginInputPassword = ({ userPw, setUserPw }) => {
    return (
        <PwFormGroup>
            <PwLabel htmlFor="userPw">Password:</PwLabel>
            <PwInput
                type="text"
                id="userPw"
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
            ></PwInput>
        </PwFormGroup>
    );
};

export { LoginInputPassword };
