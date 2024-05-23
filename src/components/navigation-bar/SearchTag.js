import '../../styles/SearchTag.css';
import ServerAPI from '../../services/ServerAPI';
import styled from 'styled-components';
import { Component } from 'react';
import SearchBox from '../SearchBox';
import searchImg from '../../assets/search.png';
import { useNavigate } from 'react-router-dom';

const SearchImgStyle = styled.div`
    filter: invert(1);
    width: 30px;
    color: white;
    transition: all 0.7s ease;
    &:hover {
        background: transparent;
        color: white;
        border: 3px
        font-weight: bold;
        img {
            filter: invert(0.6); // 이미지 색상 반전
        }
    }
`;

const SearchTag = () => {
    const navigate = useNavigate();
    const click = () => {
        navigate('/search');
    };
    return (
        <div style={{ marginTop: '50px' }}>
            <SearchImgStyle onClick={click} style={{ marginLeft: 'auto' }}>
                <img src={searchImg} alt="Search Image" height={30} />
            </SearchImgStyle>
        </div>
    );
};

export { SearchTag };
