import React, { useEffect, useState } from 'react';
import '../styles/SidebarTag.css';
import ServerAPI from '../services/ServerAPI';

function SidebarTag() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTag();
    }, []);

    const getTag = async () => {
        try {
            // axios를 사용하여 서버로부터 데이터를 가져옵니다. (예시)
            const response = await ServerAPI.get('http://localhost:8000/tags');
            
            // 가져온 데이터를 상태에 업데이트합니다.
            setTags(response.data['tags']);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="side-bar">
            {tags.map((item, index) => (
                <div className='tag-div'>{item}</div>
            ))}
        </div>
    );
};

export { SidebarTag };
