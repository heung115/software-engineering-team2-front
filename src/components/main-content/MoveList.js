import React from 'react';
import styled from 'styled-components';
import { MovieTag } from './MovieTag';

const GridContainer = styled.div`
    height: 267px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    padding: 0 10px;
`;
const MovieGridItem = styled.div`
    weight: 100%;
    height: 100%;
`;
const MoveList = ({ data, page }) => {
    console.log('movie list :' + data);
    console.log(data);
    return (
        <GridContainer>
            {'movies' in data
                ? data['movies']
                      .slice(page * 6, page * 6 + 6)
                      .map((movie, index) => (
                          <MovieGridItem>
                              <MovieTag
                                  key={index}
                                  poster_url={movie['cover_url']}
                                  title={movie['title']}
                              />
                          </MovieGridItem>
                      ))
                : 'redering'}
        </GridContainer>
    );
};

export default MoveList;
