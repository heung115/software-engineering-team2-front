import React, { useState } from 'react';
import '../styles/HeaderTag.css';


const HeaderTag = () => {
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className='search'></div>
            <div className='notice'></div>
            <div className='my-page'></div>
        </div>
    )
}

export {HeaderTag};