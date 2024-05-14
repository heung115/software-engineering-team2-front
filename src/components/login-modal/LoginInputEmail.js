import { InputGroup, InputLabel, InputTag, InputError } from '../../styles/InputTagDesign';


const LoginInputEmail = ({ userEmail, setUserEmail}) => {

    return (
        <InputGroup>
            <div>
            <InputTag
                type="text"
                id="userEmail"
                value={userEmail ? userEmail : null}
                onChange={(e) => setUserEmail(e.target.value)}
                required></InputTag>
            <InputLabel htmlFor="userEmail">Enter Your Email</InputLabel>
            </div>
        </InputGroup>
    );
};

export { LoginInputEmail };
