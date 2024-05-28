// SignupForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServerAPI from '../services/ServerAPI';
import { useSelectGenre } from '../hooks/useSelectGenre';
import { SubmitButton } from '../styles/ButtonDesign';
const SelectGenreTitle = styled.h2`
    text-align: center;
    color: white;
`;

const AllGenreContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const GenreRows = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 10px;
`;

const GenreItem = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    font-weight: bold;
    margin: 10px;
    padding: 5px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
    &.is_select {
        background-color: #260041;
        color: white;
    }
    &:hover {
        border: 1px solid black;
        background: white;
        color: black;
        font-weight: bold;

`;

const GenreCompleteButton = styled.button`
    display: block;
    width: 89.9%;
    padding: 10px;
    border: none;
    margin: 0 auto;
    margin-bottom: 5px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &.hover {
        background-color: #0056b3;
    }
`;

const SelectGenreModal = ({ closeMe }) => {
    // 이 페이지에서 관리하는 변수 들
    const [genres, setGenres] = useState([[]]);
    const [userSelect, setUserSelect] = useState([]);
    const [count, setCount] = useState(3);
    const itemsPerRow = 3;

    // 이 페이지 관련 Hook
    const { getGenres, selectGenre, completeSelect } = useSelectGenre();

    useEffect(() => {
        getGenres(setGenres, itemsPerRow);
    }, []);

    // 선택완료 번튼 관련
    const handleSubmit = () => {
        console.log('count :', count);
        if (count == 0) {
            // 선택 완료
            completeSelect(userSelect, closeMe);
        }
    };

    return (
        <div>
            <SelectGenreTitle>
                좋아하는 장르를 선택 하세요. ({count}개 남음)
            </SelectGenreTitle>
            <AllGenreContainer>
                {genres.map((genreRow, row) => (
                    <GenreRows key={row}>
                        {genreRow.map((item, col) => (
                            <GenreItem
                                key={col}
                                className={
                                    userSelect.indexOf(item) != -1
                                        ? 'is_select'
                                        : ''
                                }
                                onClick={() =>
                                    selectGenre(
                                        genres,
                                        row,
                                        col,
                                        userSelect,
                                        count,
                                        setUserSelect,
                                        setCount,
                                    )
                                }
                            >
                                {item}
                            </GenreItem>
                        ))}
                    </GenreRows>
                ))}
            </AllGenreContainer>
            <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
        </div>
    );
};

export { SelectGenreModal };
