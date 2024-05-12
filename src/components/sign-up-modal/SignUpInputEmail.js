import { InputGroup, InputLabel, InputTag, InputError } from '../../styles/InputTagDesign';

const SignUpInputEmail = ({ userEmail, setUserEmail, errors }) => {
    return (
        <div>
            <InputGroup>
                <InputTag
                    type="text"
                    id="userEmail"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                ></InputTag>
                <InputLabel htmlFor="userEmail">Email:</InputLabel>
            </InputGroup>
            <InputError>{errors.email ? errors.email : " "}</InputError>
        </div>
    );
};

export { SignUpInputEmail };
