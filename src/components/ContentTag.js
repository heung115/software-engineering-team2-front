import React, { useState } from 'react';
import '../styles/ContentTag.css';
import { SidebarTag } from './SidebarTag';
import { MainContentTag } from './MainContentTag';


const ContentTag = () => {

    const [nowTag, setNowTag] = useState("Recommend");

    const changeTag = (name) => {
        setNowTag(name);
    }

    return (
        <div className='content'>
            <SidebarTag nowTag={nowTag} setTag={changeTag} />
            <MainContentTag nowTag={nowTag} setTag={changeTag} />
        </div>
    )
}

export {ContentTag};