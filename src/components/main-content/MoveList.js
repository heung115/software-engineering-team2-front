import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    padding: 0 10px;
    border: 1px solid green;
`;
const MoveList = (data) => {
    return (
        <GridContainer>
            {'movies' in data
                ? data['movies']
                      .slice(page * 6, page * 6 + 6)
                      .map((movie, index) => (
                          <MovieTag
                              key={index}
                              poster_url={movie['cover_url']}
                              title={movie['title']}
                          />
                      ))
                : 'redering'}
        </GridContainer>
    );
};

export default MoveList;
