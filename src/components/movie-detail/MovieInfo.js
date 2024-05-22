import styled from 'styled-components';
import { MovieGenres } from './MovieGenres';

const MovieInfoContainer = styled.div`
    margin-left: 20px;
`;

const TitleH1 = styled.h1`
    margin-bottom: 10px;
    text-align: left;
    color: white;
`;

const DetailLabel = styled.p`
    text-align: left;
    color: white;
    font-size: 1.2em;
`;

const DescribeP = styled.p`
    margin-left: 20px;
    padding-right: 10px;
    text-align: left;
    color: white;
    font-size: 1em;
`;

const RatingP = styled.p`
    margin-bottom: 20px;
    margin-left: 20px;
    padding-right: 10px;
    text-align: left;
    color: white;
    font-size: 1em;
`;

const MovieInfo = ({ data }) => {
    return (
        <MovieInfoContainer>
            <TitleH1>{data['title']}</TitleH1>

            <DetailLabel>RATING</DetailLabel>
            <RatingP>★ {data['scope']}</RatingP>

            <DetailLabel>DESCRIPTION</DetailLabel>
            <DescribeP>{data['description']}</DescribeP>

            <DetailLabel>Genres</DetailLabel>
            <MovieGenres data={data} />
        </MovieInfoContainer>
    );
};

export { MovieInfo };
