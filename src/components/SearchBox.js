import useDebounce from '../hooks/useDebounce';
import ServerAPI from '../services/ServerAPI';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/logo3.png'
import { MovieTag } from './main-content/MovieTag';
//import MoveList from './main-content/MoveList';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';


const MovieGridItem = styled.div`
    height: 300px;
    width: 200px;
    border: 1px solid white;

    &:hover {
        height: 309px;
        width: 206px;
        border: 1.5px solid white;
    }
    transition: all 0.5s ease;
`;

const DivStyle = styled.div`
    margin-top: ${(prop)=>(prop.isFocused?'80px':'150px')};
    transition: all 1s ease;
`;

const PosterDivStyle = styled.div`
    margin-top: 100px;
    margin-left: 200px; 
    margin-right: 200px; 
    height: 600px;
`;

const SearchBoxStyle = styled.input`
    height: 40px;
    width: 400px;    
`;

const MainLogoStyle = styled.img`
    height: ${(prop)=>(prop.isFocused?'120px':'160px')};
    margin-bottom: 40px;
    align-items: center;
    transition: all 1s ease;
    cursor: pointer;
    
`;
const TextStyle = styled.p`
    visibility: ${(prop)=>(prop.isFocused?'visible':'hidden')};;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    color: white;
    font-size: 1em;
`;

const MoveList = ({ data,}) => {
    console.log("data:",data);
    return (
        <div>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Mousewheel]}
                className="mySwiper"
            >   
                {
                    data.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <MovieGridItem>
                                <MovieTag
                                    poster_url={movie['cover_url']}
                                    title={movie['title']}
                                    scope={movie['scope']}
                                />
                            </MovieGridItem>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

// function MovieList({ movies }) {
//     if (!movies) return;
//
//     const limitedMovies = movies.slice(0, 7);
//     console.log("limitedMovies:",limitedMovies);
//     return limitedMovies.map((movie, idx) => {
//         console.log("data:",movie);
//         return (
//             <div>
//             <PosterDivStyle> </PosterDivStyle>
//             <MoveList
//                 data = {limitedMovies}
//             > </MoveList>
//             </div>
//         );
//     });
// }

function SearchBox() {
    const [search, setSearch] = useState('');
    const [movieResult, setMovieResult] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    
    const debounceValue = useDebounce(search);
    const navigate = useNavigate();
    const click = () => {
        navigate('/');
    };

    useEffect(() => {
        const getMovies = async () => {
            try {
                const trimmedSearch = search.replace(/\s+/g, '').toLowerCase();
                // const response = await ServerAPI.get('/search/' + trimmedSearch);
                const response = await ServerAPI.get('/get-movie-list/action' );
                const res = response.data.movies;
                console.log('title : ', res);
                
                setMovieResult(res)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (debounceValue) {
            setIsFocused(true); 
            getMovies();
        } else {
            setIsFocused(false); 
        }
    }, [debounceValue]);

    return (
        <DivStyle isFocused={isFocused}>
            <MainLogoStyle 
                isFocused={isFocused}
                src={mainLogo}
                onClick={click}
            /><br/>
            <SearchBoxStyle
                type="search"
                placeholder="Search movies"
                onChange={(e) => setSearch(e.target.value)}
                //onFocus={() => setIsFocused(true)}
                //onBlur={() => setIsFocused(false)}
            />
                <TextStyle isFocused={isFocused}>
                    RESULT
                </TextStyle>
            {search && movieResult && <MoveList data={movieResult} />}
        </DivStyle>
    );
}

export default SearchBox;
