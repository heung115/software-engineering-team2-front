import { Component } from 'react';
import styled from 'styled-components';
import { HeaderTag } from '../components/navigation-bar/HeaderTag';
import { ContentTag } from '../components/ContentTag';

const Main = styled.div`
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;
class MainPage extends Component {
    render() {
        return (
            <Main>
                <HeaderTag />
                <ContentTag />
            </Main>
        );
    }
}

export { MainPage };
