"use client";

import NavBar from "@/app/components/layout/Navbar";
import styles from "../Store/store.module.css";

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.SwiperSlide}></SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </div>
  );
}
