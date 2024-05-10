import styled from "styled-components";

const LoginEtcContainer = styled.div`
`;

const GoogleImg = styled.img`
`;

const GoogleText = styled.div`
`;

const LoginEtc = () => {
    return (
        <LoginEtcContainer>
            <GoogleImg
                // className="login-google-logo"
                src="https://d1nuzc1w51n1es.cloudfront.net/d99d8628713bb69bd142.png"
            ></GoogleImg>
            <GoogleText>Login with Google</GoogleText>
        </LoginEtcContainer>
    );
};

export { LoginEtc };
