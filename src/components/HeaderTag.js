import React, { useState } from 'react';
import '../styles/HeaderTag.css';
import {SearchTag} from './SearchTag'


const HeaderTag = () => {
    return (
        <div className='header'>
            <div className='logo'></div>
            <SearchTag />
            <div className='notice'></div>
            <div className='my-page'></div>
        </div>
    )
}

export {HeaderTag};