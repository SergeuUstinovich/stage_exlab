import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import style from "./Slider.module.scss";
import { Navigation, Scrollbar } from "swiper/modules";

interface SliderItemProps {
    src: string;
    title: string;
}

interface SliderProps {
    slider: SliderItemProps[]
}

function Slider(props: SliderProps) {
    const {slider} = props
  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={20}
      slidesPerView={1}
      scrollbar={
        { 
        draggable: true,
        }
      }
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={style.swiper}
    >
    {slider.map((item) => 
        <SwiperSlide className={style.swiperslide} key={item.src}>
          <img className={style.imgSlide} src={item.src} alt={item.title} />
        </SwiperSlide>
    )}
    </Swiper>
  );
}

export default Slider;
