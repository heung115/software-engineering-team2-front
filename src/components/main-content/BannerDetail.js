import React from 'react';
import styled from 'styled-components';

const WhiteText = styled.div`
    color: white;
    margin: 0 15px;
    text-align: left;
`;

const MovieTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const MovieContent = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
    line-height: 1.7;
`;
const BannerDetail = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <WhiteText>
            <div className="main-movie-detail">
                <MovieTitle>
                    {'main' in data ? data['main']['title'] : 'rendering...'}
                </MovieTitle>
                <MovieContent>
                    {'main' in data ? data['main']['describe'] : 'rendering...'}
                </MovieContent>
            </div>
        </WhiteText>
    );
};

export default BannerDetail;
