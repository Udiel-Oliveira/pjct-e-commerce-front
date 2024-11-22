'use client';

import { useState, useEffect } from 'react';
import NavBar from "@/app/components/layout/NavBar/Navbar";
import Footer from '@/app/components/layout/Footer/Footer';
import GameSlide from "@/app/components/layout/Slide/GameSlide";
import GameShowcase from "../../components/layout/Slide/GameShowCase";
import { useGames } from '../../context/GamesContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from "./store.module.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomePage() {
  const { games, updateGames } = useGames();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        await updateGames();
        setError(null);
      } catch (err) {
        console.error('Error loading games:', err);
        setError('Falha ao carregar jogos.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGames();
  }, [updateGames]);

  const carouselGames = games?.slice(5, 10) || [];
  const showcaseGames = games?.slice(0) || [];

  if (isLoading) {
    return (
      <div className={styles.pageLoading}>
        <img src="/assets/Loading.gif" alt="" />
        <p>CARREGANDO</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <NavBar/>
      {error && (
        <div className={styles.errorAlert}>
          {error}
        </div>
      )}
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
        >
          {carouselGames.map((game, index) => (
            <SwiperSlide key={game?.id || index} className={styles.SwiperSlide}
            style={{ backgroundImage: `url(${games.backgroundImage})` }}
            >
              <GameSlide
                title={game?.title}
                description={game?.description}
                price={game?.price}
                mark={game?.mark?.name}
                category={game?.category?.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <GameShowcase games={showcaseGames} />
      <Footer />
    </div>
  );
}
