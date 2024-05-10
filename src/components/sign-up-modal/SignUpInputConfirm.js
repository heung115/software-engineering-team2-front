import styled from 'styled-components';

const ConfirmFormGroup = styled.div``;

const ConfirmLabel = styled.label``;

const ConfirmInput = styled.input``;

const ErrorP = styled.p`
`;

const SignUpInputConFirm = ({ userConfirm, setUserConfirm, errors }) => {
    return (
        <ConfirmFormGroup>
            <ConfirmLabel htmlFor="userConfirm">Confirm Password:</ConfirmLabel>
            <ConfirmInput
                type="text"
                id="userConfirm"
                value={userConfirm}
                onChange={(e) => setUserConfirm(e.target.value)}
                required
            ></ConfirmInput>
            {errors.confirmPassword && <ErrorP>{errors.confirmPassword}</ErrorP>}
        </ConfirmFormGroup>
    );
};

export { SignUpInputConFirm };
