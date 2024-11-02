"use client";

import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import GameSlide from "../../components/GameSlide";
import styles from "../Store/store.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useEffect } from 'react';
import GameShowcase from "@/app/components/GameShowCase";

export default function HomePage() {
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

  const mainGamesData = [
    { tag: "Tipo", title: "Jogo 1", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 2", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 3", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 4", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 5", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 6", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 7", price: "R$000,00", backgroundImage: "" },
    { tag: "Tipo", title: "Jogo 8", price: "R$000,00", backgroundImage: "" },
    
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
        <GameShowcase games={mainGamesData} />
      <Footer />
    </div>
  );
}
