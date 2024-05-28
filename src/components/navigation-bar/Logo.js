import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo3.png';

const StyledLogo = styled.img`
    width: 212px;
    height: 130px;
    cursor: pointer; /* 커서가 포인터로 변경되도록 추가 */
`;

const Logo = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); // 홈 화면으로 이동
    };

    return <StyledLogo src={logo} alt="Logo" onClick={handleLogoClick} />;
};

export default Logo;
