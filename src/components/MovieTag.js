import React, { useEffect, useState } from 'react';
import '../styles/MovieTag.css';

function MovieTag({poster_url, title}) {
    return (
        <div className="movie-component">
            <div className='movie-poster-container'>
                <img className='movie-poster' src={poster_url}></img>
                <p className='movie-title'>{title}</p>
            </div>
        </div>
    );
}

export { MovieTag };
