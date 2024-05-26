import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { SearchTag } from './SearchTag';
import LoginArea from './LoginArea';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    // grid-template-columns: 212px repeat(3, 1fr) repeat(4, 212px);

    grid-template-rows: 130px;
    gap: 20px;
    padding: 0;
    // border: 1px solid red;
`;

const StyledLogo = styled(Logo)`
    grid-colum: 1 / 2;
`;

const StyledSearch = styled.div`
    grid-column: 5 / 8;
`;

const StyledButton = styled(LoginArea)`
    grid-column: 8 / 9;
`;

const EmptyGridItem = styled.div`
    grid-column: 2 / 5;
`;
const HeaderTag = () => {
    return (
        <GridContainer>
            <StyledLogo />
            <EmptyGridItem />
            <StyledSearch>{<SearchTag />}</StyledSearch>
            <StyledButton />
        </GridContainer>
    );
};
export { HeaderTag };
