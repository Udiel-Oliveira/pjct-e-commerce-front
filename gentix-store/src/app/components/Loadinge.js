import styles from "./loading.module.css"
import Swiper from "swiper"
import { SwiperSlide } from "swiper/react"
import GameSlide from "@/app/components/GameSlide"

export default function Loading(){
    return
    (
        <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={styles.mySwiper}
        >
          
            <SwiperSlide className={styles.SwiperSlide}
            >
              <GameSlide
              />
            </SwiperSlide>
          
        </Swiper>
      </div>
    )
}