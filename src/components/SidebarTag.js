import React, { useEffect, useState } from 'react';
import '../styles/SidebarTag.css';
import ServerAPI from '../services/ServerAPI';

function SidebarTag(nowTag, setTag) {
    const [tags, setTags] = useState(['Recommand']);

    useEffect(() => {
        getTag();
    }, []);

    const getTag = async () => {
        try {
            // axios를 사용하여 서버로부터 데이터를 가져옵니다. (예시)
            const response = await ServerAPI.get('http://localhost:8000/tags');
            
            // 가져온 데이터를 상태에 업데이트합니다.
            const res = tags.concat(response.data['tags'])
            setTags(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="side-bar">
            {tags.map((item, index) => (
                <div className='tag-div'>{item}</div>
            ))}
            <div class="tag-div">Adventure</div><div class="tag-div">Animation</div><div class="tag-div">Children</div><div class="tag-div">Comedy</div><div class="tag-div">Fantasy</div><div class="tag-div">Adventure</div><div class="tag-div">Animation</div><div class="tag-div">Children</div><div class="tag-div">Comedy</div><div class="tag-div">Fantasy</div><div class="tag-div">Adventure</div><div class="tag-div">Animation</div><div class="tag-div">Children</div><div class="tag-div">Comedy</div><div class="tag-div">Fantasy</div><div class="tag-div">Adventure</div><div class="tag-div">Animation</div><div class="tag-div">Children</div><div class="tag-div">Comedy</div><div class="tag-div">Fantasy</div>
        </div>
    );
};

export { SidebarTag };
