import React from 'react';
import styled from 'styled-components';

const MoviePosterContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover .overlay {
        opacity: 1;
    }

    &:hover img {
        filter: brightness(50%);
    }
`;

const MoviePosterImg = styled.img`
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5em;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const Title = styled.p`
    margin: 0;
    font-size: 1em;
`;

const Rating = styled.div`
    margin-top: 0.5em;
    font-size: 1.2em;
`;

function MovieTag({ poster_url, title, scope }) {
    return (
        <MoviePosterContainer>
            <MoviePosterImg src={poster_url} alt={title} />
            <Overlay className="overlay">
                <Title>{title}</Title>
                <Rating>★ {scope}</Rating>
            </Overlay>
        </MoviePosterContainer>
    );
}

export { MovieTag };
