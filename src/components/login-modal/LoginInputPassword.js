import { InputGroup, InputLabel, InputTag } from "../../styles/InputTagDesign";

const LoginInputPassword = ({ userPw, setUserPw}) => {
    return (
        <InputGroup>
            <InputTag
                type="password"
                id="userPw"
                value={userPw ? userPw : null}
                onChange={(e) => setUserPw(e.target.value)}
                required></InputTag>
            <InputLabel htmlFor="userPw">Enter Your Password</InputLabel>
        </InputGroup>
    );
};

export { LoginInputPassword };
