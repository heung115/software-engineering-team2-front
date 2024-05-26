import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { HeaderTag } from '../components/navigation-bar/HeaderTag';
import MoveList from '../components/main-content/MoveList';
import { useParams } from 'react-router-dom';
import ServerAPI from '../services/ServerAPI';
import { SessionContext } from '../services/SessionProvider';
import { MovieDetail } from '../components/movie-detail/MovieDetail';

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
`

const MovieDetailPage = () => {
    const session = useContext(SessionContext);

    const {id} = useParams();
    const [data, setData] = useState({
        'cover_url': "none",
        'description': "rendering",
        'genres': [],
        'movies': [],
        'scope': "rendering",
        'title': "rendering"
    });

    useEffect(() => {
        getMovieDetail();
    }, []);

    const getMovieDetail = async () => {
        try {
            // axios를 사용하여 서버로부터 데이터를 가져옵니다. (예시)
            const response = await ServerAPI.get('/get-movie-detail/' + id + "/" + session['userId']);

            // key 값 변경
            let result = { ...response['data']}
            result['movies'] = result['more-like-this']
            delete result['more-like-this']

            // 가져온 데이터를 상태에 업데이트합니다.
            // console.log(response['data'])
            setData(result)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Main>
            <HeaderTag />

            <MovieDetail data={data}/>

            <MoreLabel>More like this</MoreLabel>
            <MoreMovieContainer>
                <MoveList data={data} page={0} />
            </MoreMovieContainer>
            <MoreMovieContainer>
                <MoveList data={data} page={1} />
            </MoreMovieContainer>
        </Main>
    );
}

export { MovieDetailPage };