import { InputGroup, InputLabel, InputTag, InputError } from '../../styles/InputTagDesign';

const SignUpInputPassword = ({ userPw, setUserPw, errors }) => {
    return (
        <div>
            <InputGroup>
                <InputTag
                    type="text"
                    id="userSignPw"
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                    required
                ></InputTag>
                <InputLabel htmlFor="userSignUpPw">Password:</InputLabel>
            </InputGroup>
            <InputError>{errors.password}</InputError>
            {/* {errors.password && } */}
        </div>
    );
};

export { SignUpInputPassword };
