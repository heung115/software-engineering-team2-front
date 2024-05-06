import React, { useState } from 'react';
import '../styles/ContentTag.css';
import { SidebarTag } from './SidebarTag';
import { MainContentTag } from './MainContentTag';


const ContentTag = () => {
    return (
        <div className='content'>
            <SidebarTag />
            <MainContentTag />
        </div>
    )
}

export {ContentTag};