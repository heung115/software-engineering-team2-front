import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WhiteText = styled.div`
    color: white;
    margin: 0 15px;
    text-align: left;
    overflow: hidden;
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
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Button = styled.div`
    display: flex;
    margin-top: 25px;
    width: 100px;
    height: 30px;
    border: 1px solid white;
    border-radius: 15px;
    background: transparent;
    color: white;
    font-weight: bold;
    line-height: 30px;
    user-select: none;
    transition: all 0.3s ease;
    cursor: pointer;

    text-align: center;
    justify-content: center;

    &:hover {
        border: 1px solid black;
        background: white;
        color: black;
        font-weight: bold;
    }
`;

const BannerDetail = ({ data }) => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(`/movie-detail/${data['main']['movie_id']}`);
    };

    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <WhiteText>
            <MovieTitle>
                {'main' in data ? data['main']['title'] : 'rendering...'}
            </MovieTitle>
            <MovieContent>
                {'main' in data ? data['main']['describe'] : 'rendering...'}
            </MovieContent>
            <Button onClick={handleButton}>Detail</Button>
        </WhiteText>
    );
};

export default BannerDetail;
