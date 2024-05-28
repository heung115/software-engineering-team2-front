import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieActorPoster } from './MovieActorPoster';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';

const MovieItem = styled.div`
    width: 80%;
    height: 80%;
`;
const WhiteText = styled.div`
    color: white;
`;
const MovieActor = ({ data }) => {
    return (
        <div>
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                freeMode={true}
                // mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                modules={[FreeMode, Pagination, Mousewheel]}
                className="mySwiper"
            >
                {data && data.length > 0 ? (
                    data.map((data, index) => (
                        <SwiperSlide key={index}>
                            <MovieItem>
                                <MovieActorPoster
                                    profile_url={data['profile_path']}
                                    name={data['name']}
                                    cast_character={data['character']}
                                />
                            </MovieItem>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>
                        <WhiteText>NO data...</WhiteText>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export { MovieActor };
