import React, { useState } from 'react';
import '../styles/ContentTag.css';
import { SidebarTag } from './SidebarTag';


const ContentTag = () => {
    return (
        <div className='content'>
            <SidebarTag />

        </div>
    )
}

export {ContentTag};