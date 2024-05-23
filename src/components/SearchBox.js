import useDebounce from '../hooks/useDebounce';
import ServerAPI from '../services/ServerAPI';
import { useEffect, useState } from 'react';

function MovieList({ movies }) {
    if (!movies) return;

    return movies.map((movie) => {
        return (
            <div>
                <span>{movie.title}</span>{' '}
                <img
                    style={{
                        height: '400px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                    src={movie.cover_url}
                    alt={movie.title}
                />
            </div>
        );
    });
}

function SearchBox() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState([]);

    const debounceValue = useDebounce(search);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await ServerAPI.get('/get-movie-list/action');
                console.log(response);
                const res = response.data.movies;
                console.log('title : ', res);
                setMovies(res);
                setMovieTitle(res.map((movie) => movie.title));
                console.log('title22 : ', movieTitle);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (debounceValue) getMovies();
    }, [debounceValue]);

    useEffect(() => {
        if (movies) {
            const trimmedSearch = search.trim().toLowerCase();
            const filtered = movies.filter((movie) =>
                movie.title.toLowerCase().includes(trimmedSearch),
            );
            setMovieTitle(filtered);
            console.log('F_title', filtered);
        }
    }, [search, movies]);

    return (
        <div className="">
            <input
                type="search"
                placeholder="Search movies"
                onChange={(e) => setSearch(e.target.value)}
            />
            <hr />
            {search && movieTitle ? <MovieList movies={movieTitle} /> : ''}
        </div>
    );
}

export default SearchBox;
