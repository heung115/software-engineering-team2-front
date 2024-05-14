import styled from 'styled-components';

const LoginEtcContainer = styled.div`
    margin-top: 10px;
`;

const GoolgeBox = styled.div`
    margin: 0 auto;
    width: 60px;
    height: auto;
    padding: 4px;
    border: 0px solid black;
    transition: all 0.3s ease;
    &:hover {
        background-color: black;
        border-radius: 7px;
    }
`;

const GoogleImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 40px;
`;

const GoogleText = styled.div`
    margin: 0 auto;
    text-align: center;
    height: 20px;
    line-height: 20px;
    user-select: none;
    transition: all 0.3s ease;
    ${GoolgeBox}:hover & {
        color: white;
    }
`;

const LoginEtc = ({googleLogin}) => {
    return (
        <LoginEtcContainer>
            <GoolgeBox
                onClick={googleLogin}>
                <GoogleImg
                    // className="login-google-logo"
                    src="https://d1nuzc1w51n1es.cloudfront.net/d99d8628713bb69bd142.png"
                ></GoogleImg>
                <GoogleText>Google</GoogleText>
            </GoolgeBox>
        </LoginEtcContainer>
    );
};

export { LoginEtc };
