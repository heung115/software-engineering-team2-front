import { InputGroup, InputLabel, InputTag, InputError } from '../../styles/InputTagDesign';

const SignUpInputConFirm = ({ userConfirm, setUserConfirm, errors }) => {
    return (
        <div>
            <InputGroup>
                <InputTag
                    type="text"
                    id="userConfirm"
                    value={userConfirm}
                    onChange={(e) => setUserConfirm(e.target.value)}
                    required
                ></InputTag>
                <InputLabel htmlFor="userConfirm">Confirm Password:</InputLabel>
            </InputGroup>
            <InputError>{errors.confirmPassword}</InputError>
            {/* {errors.confirmPassword && } */}
        </div>
    );
};

export { SignUpInputConFirm };
