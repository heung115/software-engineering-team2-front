import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { HeaderTag } from '../components/navigation-bar/HeaderTag';
import MoveList from '../components/main-content/MoveList';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import ServerAPI from '../services/ServerAPI';
import { SessionContext } from '../services/SessionProvider';
import { MovieDetail } from '../components/movie-detail/MovieDetail';
import { MovieActor } from '../components/movie-detail/MovieActor';

const Main = styled.div``;

const MoreLabel = styled.p`
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    text-align: left;
    color: white;
    font-size: 2em;
`;

const MoreMovieContainer = styled.div`
    margin-bottom: 30px;
`;

const MovieDetailPage = () => {
    const navigate = useNavigate();
    const session = useContext(SessionContext);

    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ServerAPI.get('/get-movie-detail/' + id);
                let result = { ...response.data };
                if (result['more-like-this']) {
                    result['movies'] = result['more-like-this'];
                    delete result['more-like-this'];
                }

                if (!result || Object.keys(result).length === 0) {
                    navigate('/nodata', { replace: true }); // 데이터가 없으면 네비게이트
                } else {
                    setData(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('/nodata', { replace: true }); // 에러 발생 시 네비게이트
            }
        };

        fetchData();
    }, [id, navigate]);

    if (!data) {
        return null; // 데이터가 없는 동안 null 반환 (로딩 상태 표현도 가능)
    }

    return (
        <Main>
            <HeaderTag />
            <MovieDetail data={data} />

            <MoreLabel>Actor</MoreLabel>
            <MovieActor data={data['actors']} />

            <MoreLabel>Directors</MoreLabel>
            <MovieActor data={data['directors']} />
            <MoreLabel>More like this</MoreLabel>
            <MoreMovieContainer>
                <MoveList data={data} page={0} />
            </MoreMovieContainer>
            <MoreMovieContainer>
                <MoveList data={data} page={1} />
            </MoreMovieContainer>
        </Main>
    );
};

export { MovieDetailPage };
