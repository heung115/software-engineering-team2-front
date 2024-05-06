import React, { useState } from 'react';
import '../styles/MainContentTag.css';


const MainContentTag = (nowTag, setTag) => {
    return (
        <div className='main-content'>
            <div className='main-top'>
                <div className='main-movie-detail'>
                    <h2 className='main-movie-title'>Hello. world.</h2>
                    <div className='main-movie-describe'>Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.</div>
                    <div className='main-movie-container'>
                        <button className='main-add'>add</button>
                        <button className='main-add'>add</button>
                    </div>
                </div>
                <div className='main-movie-poster'></div>
            </div>
            <div className='main-mid'>
                <div className='move-left'>{"<"}</div>
                <div className='move-right'>{">"}</div>
            </div>
            <div className='main-bot'></div>
        </div>
    )
}

export {MainContentTag};