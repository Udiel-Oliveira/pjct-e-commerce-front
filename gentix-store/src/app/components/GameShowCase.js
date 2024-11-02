// components/GameShowcase.js
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './gameShowCaso.module.css';

const GameShowcase = ({ games }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, []);

  const goToNextSlides = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 4);
    }
  };

  const goToPrevSlides = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex - 4);
    }
  };

  return (
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
          <SwiperSlide
            key={index}
            className={styles.swiperSlide}
          >
            <div className={styles.gameImg} style={{
              backgroundImage: `url(${game.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <span className={styles.tags}>{game.tag}</span>
            </div>
            <div className={styles.infoCard}>
              <h1>{game.title}</h1>
              <span className={styles.price}>{game.price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameShowcase;
