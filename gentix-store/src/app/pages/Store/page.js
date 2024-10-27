"use client"; // Adicione esta linha no início do arquivo

import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import styles from "../Store/store.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

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
            delay: 5000,
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
          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.swiperContent}>
              <div className={styles.tagsContainer}>
                <span>Rethro</span>
                <span>Novo</span>
              </div>

              <div className={styles.infoGame}>
                <h1>Machi&apos;s Quest</h1>
                <p>
                  Subway Money é um jogo eletrizante de corrida infinita que 
                  desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.
                </p>
              </div>

              <div className={styles.btnActions}>
                <Link href="/">
                  <button className={styles.btnActive}>
                    <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} />
                    Saiba Mais
                  </button>
                </Link>
                <Link href="/">
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faDownload} style={{ fontSize: '20px' }} />
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.swiperContent}>
              <div className={styles.tagsContainer}>
                <span>Rethro</span>
                <span>Novo</span>
              </div>

              <div className={styles.infoGame}>
                <h1>Machi&apos;s Quest</h1>
                <p>
                  Subway Money é um jogo eletrizante de corrida infinita que 
                  desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.
                </p>
              </div>

              <div className={styles.btnActions}>
                <Link href="/">
                  <button className={styles.btnActive}>
                    <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} />
                    Saiba Mais
                  </button>
                </Link>
                <Link href="/">
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faDownload} style={{ fontSize: '20px' }} />
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.swiperContent}>
              <div className={styles.tagsContainer}>
                <span>Rethro</span>
                <span>Novo</span>
              </div>

              <div className={styles.infoGame}>
                <h1>Machi&apos;s Quest</h1>
                <p>
                  Subway Money é um jogo eletrizante de corrida infinita que 
                  desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.
                </p>
              </div>

              <div className={styles.btnActions}>
                <Link href="/">
                  <button className={styles.btnActive}>
                    <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} />
                    Saiba Mais
                  </button>
                </Link>
                <Link href="/">
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faDownload} style={{ fontSize: '20px' }} />
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <div className={styles.swiperContent}>
              <div className={styles.tagsContainer}>
                <span>Rethro</span>
                <span>Novo</span>
              </div>

              <div className={styles.infoGame}>
                <h1>Machi&apos;s Quest</h1>
                <p>
                  Subway Money é um jogo eletrizante de corrida infinita que 
                  desvia os jogadores de obstáculos urbanos. O objetivo principal é correr o máximo.
                </p>
              </div>

              <div className={styles.btnActions}>
                <Link href="/">
                  <button className={styles.btnActive}>
                    <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} />
                    Saiba Mais
                  </button>
                </Link>
                <Link href="/">
                  <button className={styles.btn}>
                    <FontAwesomeIcon icon={faDownload} style={{ fontSize: '20px' }} />
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <Footer/>
    </div>
  );
}
