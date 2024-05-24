import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MovieTag } from './MovieTag';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';

const MovieGridItem = styled.div`
    width: 100%;
    height: 100%;
`;

const MoveList = ({ data, page }) => {
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
                {'movies' in data ? (
                    data['movies'].map((movie, index) => (
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
                ) : (
                    <SwiperSlide>Rendering...</SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default MoveList;
