"use client";

import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import GameSlide from "../../components/GameSlide";
import styles from "../Store/store.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useEffect } from 'react';

export default function HomePage() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, []);

  const slidesData = [
    {
      tags1: "Ação",
      tags2: "Aventura",
      title: "Machi's Quest",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg"
    },
    {
      tags1: "Estratégia",
      tags2: "Survival",
      title: "SubwaySurfes",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg"
    },
    {
      tags1: "Mundo Aberto",
      tags2: "Puzzle",
      title: "Machi's Quest",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg"
    },
  ];
  const goToNextSlides = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 4); // Avança 4 slides
    }
  };

  const goToPrevSlides = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex - 4); // Retorna 4 slides
    }
  };
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
          slidesPerGroupAuto={5}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.SwiperSlide} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
              <GameSlide title={slide.title} description={slide.description} tags1={slide.tags1} tags2={slide.tags2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.mainGames}>
        <div className={styles.titleSec}>
          <h1>Principais Jogos</h1>
          <div className={styles.customNavigation}>
            <div onClick={goToPrevSlides} ref={prevRef} className={styles.customPrev}>◀</div>
            <div onClick={goToNextSlides} ref={nextRef} className={styles.customNext}>▶</div>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          loop={false}
          pagination={false}
          navigation={{
            nextEl: nextRef.current, 
            prevEl: prevRef.current  
          }}
          onInit={(swiper) => {

            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          parallax={true}
          modules={[Pagination, Navigation]}
          className={styles.gameSwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
