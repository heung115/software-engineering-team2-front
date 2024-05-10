import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarTag } from './side-bar/SidebarTag';
import { MainContentTag } from './main-content/MainContentTag';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-columns: 212px repeat(7, 1fr);

    grid-template-rows: 800px;
    gap: 20px;
    padding: 0;
    border: 1px solid red;
`;
const StyledSidebar = styled.div`
    border: 1px solid black;
    grid-column: 1 / 2;
`;

const StyledContent = styled.div`
    grid-column: 2 / 9;
`;

const ContentTag = () => {
    const [nowTag, setNowTag] = useState('Recommand');

    const changeTag = (name) => {
        setNowTag(name);
    };

    return (
        <GridContainer>
            <StyledSidebar>
                <SidebarTag nowTag={nowTag} changeTag={changeTag} />
            </StyledSidebar>
            <StyledContent>
                <MainContentTag nowTag={nowTag} />
            </StyledContent>
        </GridContainer>
    );
};

export { ContentTag };
