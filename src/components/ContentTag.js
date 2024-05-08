import React, { useState } from 'react';
import '../styles/ContentTag.css';
import { SidebarTag } from './SidebarTag';
import { MainContentTag } from './MainContentTag';


const ContentTag = () => {

    const [nowTag, setNowTag] = useState("Recommand");

    const changeTag = (name) => {
        setNowTag(name);
    }

    return (
        <div className='content'>
            <SidebarTag nowTag={nowTag} changeTag={changeTag} />
            <MainContentTag nowTag={nowTag} />
        </div>
    )
}

export {ContentTag};