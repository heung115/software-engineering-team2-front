import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo3.png';

const StyledLogo = styled.img`
    width: 212px;
    height: 130px;
`;

const Logo = () => <StyledLogo src={logo} alt="Logo" />;

export default Logo;
