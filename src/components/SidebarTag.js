import React, { useEffect, useState } from 'react';
import '../styles/SidebarTag.css';
import ServerAPI from '../services/ServerAPI';

function SidebarTag({ nowTag, changeTag }) {
    const [tags, setTags] = useState(['Recommand']);

    useEffect(() => {
        getTag();
    }, []);

    const getTag = async () => {
        try {
            // axios를 사용하여 서버로부터 데이터를 가져옵니다. (예시)
            const response = await ServerAPI.get('http://localhost:8000/tags');

            // 가져온 데이터를 상태에 업데이트합니다.
            const res = tags.concat(response.data['tags']);
            console.log(res);
            setTags(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="side-bar">
            {tags.map((item, index) => (
                <div
                    className={
                        item == nowTag ? 'tag-div select-tag' : 'tag-div'
                    }
                    onClick={(e) => {
                        changeTag(item);
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export { SidebarTag };
