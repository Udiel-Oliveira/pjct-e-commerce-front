
// app/page.js
"use client";

import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import GameSlide from "../../components/GameSlide";
import styles from "../Store/store.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';

export default function HomePage() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slidesData = [
    {
      title: "Machi's Quest",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg" // Caminho para a imagem de fundo
    },
    {
      title: "SubwaySurfes",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg" // Caminho para a imagem de fundo
    },
    {
      title: "Machi's Quest",
      description: "Subway Money é um jogo eletrizante de corrida infinita que desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.",
      backgroundImage: "/assets/jogo1.svg" // Caminho para a imagem de fundo
    },
    // Adicione mais slides aqui se necessário
  ];

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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className={styles.mySwiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.SwiperSlide} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
                <GameSlide title={slide.title} description={slide.description} />
            </SwiperSlide>
          ))}
          
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
