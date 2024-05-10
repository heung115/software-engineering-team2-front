import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServerAPI from '../../services/ServerAPI';
import Tag from './Tag';

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(12, minmax(1fr, 1fr));
    grid-gap: 20px;
    height: 100vh;
`;

const EmptyGridItem = styled.div`
    border: 1px solid red;
`;

const TagGridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
`;
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
        <Grid>
            <EmptyGridItem />

            {Array.from({ length: 11 }).map((_, index) => {
                if (index < tags.length) {
                    return (
                        <TagGridItem key={index}>
                            <Tag
                                item={tags[index]}
                                nowTag={nowTag}
                                changeTag={changeTag}
                            />
                        </TagGridItem>
                    );
                } else {
                    return <EmptyGridItem key={index} />;
                }
            })}
        </Grid>
    );
}

export { SidebarTag };
