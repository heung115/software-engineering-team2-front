import styled from 'styled-components';
import { MovieInfo } from './MovieInfo';

const MovieDetailContainer = styled.div`
    // background: linear-gradient(to left, #000000, #888888);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px; // 둥근 모서리
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 은은한 그림자 효과
    margin: 20 auto;
    padding: 20px;
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
