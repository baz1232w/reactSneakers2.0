import React from 'react';
import slider from '../../../assets/header/Group 112.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {A11y, Autoplay, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Slider.module.css'

export const Slider = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay,Navigation, Pagination, A11y]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={slider} alt="slider"/></SwiperSlide>
                <SwiperSlide> <img src={slider} alt="slider"/></SwiperSlide>
                <SwiperSlide> <img src={slider} alt="slider"/></SwiperSlide>
            </Swiper>
        </>
    );
};

