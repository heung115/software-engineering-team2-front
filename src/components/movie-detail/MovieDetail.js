import styled from 'styled-components';
import { MovieInfo } from './MovieInfo';

const MovieDetailContainer = styled.div`
    background: linear-gradient(to left, #000000, #888888);
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
`;

const PosterImg = styled.img`
    width: 300px;
`;

const MovieDetail = ({ data }) => {
    return (
        <MovieDetailContainer>
            <PosterImg src={data['cover_url']}></PosterImg>

            <MovieInfo data={data} />
            {/* <MovieInfoDiv>
                
            </MovieInfoDiv> */}
        </MovieDetailContainer>
    );
};

export { MovieDetail };
