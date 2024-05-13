import React, { useState, useEffect } from 'react';
import ServerAPI from '../../services/ServerAPI';
import styled from 'styled-components';
import { MovieTag } from './MovieTag';
import Banner from './Banner';
import MoveList from './MoveList';
import MovePage from './MovePage';

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
            // console.log(res);
            setData(res);
            setMaxPage(Math.ceil(res['movies'].length / 6 - 1));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const incPage = () => {
        if (page < maxPage) {
            setPage(page + 1);
        } else {
            console.log('max page');
        }
    };

    const decPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div className="main-content">
            {data ? <Banner data={data} /> : <div> load</div>}
            <MovePage decPage={decPage} incPage={incPage} />
            {data ? <MoveList data={data} page={page} /> : <div>load</div>}
        </div>
    );
};

export { MainContentTag };
