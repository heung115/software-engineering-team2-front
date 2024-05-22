import React, { useState, useContext } from 'react';
import { SessionContext } from '../services/SessionProvider';
import ServerAPI from '../services/ServerAPI';
import { supabase } from '../services/Supabase';

const useSelectGenre = () => {
    const session = useContext(SessionContext);

    // 처음에 서버로 부터 장르 목록을 가져옴.
    const getGenres = async (setGenres, itemsPerRow) => {
        try {
            const response = await ServerAPI.get('/genre');

            const res = response.data['genre'];

            const rows = [];
            for (let i = 0; i < res.length; i += itemsPerRow) {
                const rowItems = res.slice(i, i + itemsPerRow);
                rows.push(rowItems);
            }

            setGenres(rows);
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    };

    // 장를 선택할 시
    const selectGenre = (
        genreList,
        row,
        col,
        userSelect,
        count,
        setUserSelect,
        setCount,
    ) => {
        const nowSelect = genreList[row][col];

        if (userSelect.indexOf(nowSelect) != -1) {
            // 이미 선택한 경우 -> 이미 선택한 걸 삭제
            const newUserSelect = userSelect.filter(
                (item) => item !== nowSelect,
            );

            setUserSelect(newUserSelect);
            setCount(count + 1);
        } else {
            // 새로운 장르 선택
            if (count == 0) {
                // 이미 모두 선택한 경우 -> 아무것도 안함.
                return;
            }

            // 지금 선택한걸 선택 배열에 저장
            userSelect.push(nowSelect);
            setUserSelect(userSelect);
            setCount(count - 1);
        }
    };

    // 선택 완료시
    const completeSelect = async (userSelect, closeMe) => {
        // 백엔드 서버에 사용자가 선택한 것들을 전송
        const data = {
            id: session['userId'],
            genres: userSelect,
        };

        try {
            const response = await ServerAPI.post('/prefer-genres', data);

            if (response.status === 200 && response.data['res'] === true) {
                // 정상적인 처리됨. - DB에 사용자 is_select가 true로 바꿈.
                const { data, error } = await supabase
                    .from('userinfo')
                    .update({ need_select: false })
                    .eq('id', session['userId'])
                    .select();

                if (error) {
                    console.log(error);
                } else {
                    closeMe();
                }
            } else {
                console.log('server error');
            }
        } catch (e) {
            console.error('에러 발생:', e);
        }
    };

    return { getGenres, selectGenre, completeSelect };
};

export { useSelectGenre };
