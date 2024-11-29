'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link'; // Navegação com Link
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './gameShowCaso.module.css';

const GameShowcase = ({ games }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  const goToNextSlides = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 4);
    }
  };

  const goToPrevSlides = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex - 4);
    }
  };

  const formatPrice = (price) => {
    if (!price) return 'Preço indisponível';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (!games || games.length === 0) {
    return (
      <div className={styles.mainGames}>
        <div className={styles.titleSec}>
          <h1>Principais Jogos</h1>
          <div className={styles.customNavigation}>
            <button onClick={goToPrevSlides} ref={prevRef} className={styles.customPrev}>
              ◀
            </button>
            <button onClick={goToNextSlides} ref={nextRef} className={styles.customNext}>
              ▶
            </button>
          </div>
        </div>
        <div className={styles.noGames}>
          <h3>Nenhum jogo disponível</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainGames}>
      <div className={styles.titleSec}>
        <h1>Principais Jogos</h1>
        <div className={styles.customNavigation}>
          <button onClick={goToPrevSlides} ref={prevRef} className={styles.customPrev}>
            ◀
          </button>
          <button onClick={goToNextSlides} ref={nextRef} className={styles.customNext}>
            ▶
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        loop={games.length > 4}
        pagination={false}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Pagination, Navigation]}
        className={styles.gameSwiper}
      >
        {games.map((game, index) => (
          <SwiperSlide key={game.id || index} className={styles.swiperSlide}>
          <Link
            href={{
              pathname: '/detail',
              query: {
                id: game.id,
                title: game.title,
                description: game.description,
                price: game.price,
              },
            }}
            className={styles.gameLink}
          >
            <div className={styles.gameCard}>
              <div
                className={styles.gameImg}
                style={{
                  backgroundImage: `url(${game.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {game.category && <span className={styles.tags}>{game.category}</span>}
              </div>
              <div className={styles.infoCard}>
                <h2>{game.title}</h2>
                <span className={styles.price}>{formatPrice(game.price)}</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameShowcase;
