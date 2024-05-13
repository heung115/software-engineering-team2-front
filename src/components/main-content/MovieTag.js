import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import '../styles/MovieTag.css';

const MoviePosterImg = styled.img`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;

function MovieTag({ poster_url, title }) {
    return (
        <div className="movie-poster-container">
            <MoviePosterImg src={poster_url} />
            {/* <p className="movie-title">{title}</p> */}
        </div>
    );
}

export { MovieTag };
