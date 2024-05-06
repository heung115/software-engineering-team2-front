import React, { useState, useEffect } from 'react';
import '../styles/MainContentTag.css';
import ServerAPI from '../services/ServerAPI';
import { MovieTag } from './MovieTag';

const MainContentTag = ({ nowTag }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        getData();
    }, [nowTag]);

    const getData = async () => {
        try {
            // axios를 사용하여 서버로부터 데이터를 가져옵니다. (예시)
            const response = await ServerAPI.get(
                'http://localhost:8000/get_movie_list/' + nowTag,
            );

            // 가져온 데이터를 상태에 업데이트합니다.
            const res = response.data;
            console.log(res);
            setData(res);
            setMaxPage(Math.ceil(res['movies'].length / 6 - 1))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const incPage = () => {
        if (page < maxPage) {
            setPage(page + 1);
        } else {
            console.log("max page")
        }
    }

    const decPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    return (
        <div className="main-content">
            <div className="main-top">
                <div className="main-movie-detail">
                    <h2 className="main-movie-title">
                        {'main' in data
                            ? data['main']['title']
                            : 'rendering...'}
                    </h2>
                    <div className="main-movie-describe">
                        {'main' in data
                            ? data['main']['describe']
                            : 'rendering...'}
                    </div>
                    <div className="main-movie-container">
                        <button className="main-add">add</button>
                        <button className="main-add">add</button>
                    </div>
                </div>
                <div className="main-movie-poster-container">
                    <img
                        className="main-movie-poster"
                        src={
                            'main' in data
                                ? data['main']['cover_url']
                                : 'rendering'
                        }
                    ></img>
                </div>
            </div>
            <div className="main-mid">
                <div
                    className="move-left"
                    onClick={decPage}
                >
                    {'<'}
                </div>
                <div
                    className="move-right"
                    onClick={incPage}
                >
                    {'>'}
                </div>
            </div>
            <div className="main-bot">
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
            </div>
        </div>
    );
};

export { MainContentTag };
