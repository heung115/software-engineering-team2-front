import { Component } from 'react';
import styled from 'styled-components';
import { HeaderTag } from '../components/navigation-bar/HeaderTag';
import { ContentTag } from '../components/ContentTag';
import { useParams } from 'react-router-dom';

const Main = styled.div`
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const MovieDetailPage = () => {

    const {id} = useParams();

    return (
        <Main>
            <div style={{color: 'white'}}>{id}</div>
        </Main>
    );
}

export { MovieDetailPage };
