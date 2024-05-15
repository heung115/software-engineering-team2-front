import React from 'react';
import styled from 'styled-components';

const MoivePoster = styled.img`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0px 0px 20px #666;
`;
const PosterSize = styled.div`
    height: 400px;
    overflow: hidden;
    position: relative;
`;
const MainMoviePoster = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <PosterSize>
            <MoivePoster
                src={'main' in data ? data['main']['cover_url'] : 'rendering'}
            ></MoivePoster>
        </PosterSize>
    );
};

export default MainMoviePoster;
