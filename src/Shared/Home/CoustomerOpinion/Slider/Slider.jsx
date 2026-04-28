import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import CardSlider from './CardSlider';

export default function Slider() {
  return (
    <>
      <Swiper
        direction={'horizontal'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  bg-white rounded-2xl border-2 border-gray-400"
      >
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
        <SwiperSlide><CardSlider /></SwiperSlide>
      </Swiper>
    </>
  );
}