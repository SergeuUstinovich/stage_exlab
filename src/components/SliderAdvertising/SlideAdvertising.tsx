import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import style from "./SliderAdvertising.module.scss";
import { A11y, Navigation, Pagination } from "swiper/modules";

import slideNew from '../../assets/img/Slider arrow_right.png'
import slidePrev from '../../assets/img/Slider arrow_left.png'
import { Button } from "../../ui/Button";

interface SliderItemProps {
  src: string;
  title: string;
  text: string;
  colorBg: string
}

interface SliderProps {
  slider: SliderItemProps[];
}

function SliderAdvertising(props: SliderProps) {
  const { slider } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        el: ".pagination",
        clickable: true,
      }}
      navigation={{
        nextEl:'.buttonNew',
        prevEl:'.buttonPrev'
      }}
      loop
      className={style.swiper}
    >
      {slider.map((item) => (
          <SwiperSlide className={style.swiperslide} key={item.src}>
            <div className={style.bgSlider} style={{backgroundColor:item.colorBg}}>
              <div className={style.swiperBlock}>
                <div className={style.blockInfo}>
                  <h3 className={style.title}>
                    {item.text}
                  </h3>
                  <Button className={style.btnSlider}>Забронировать</Button>
                </div>
              </div>
              <img className={style.imgSlide} src={item.src} alt={item.title} />
            </div>
          </SwiperSlide>
      ))}
      
      <div className="buttonPrev">
        <img src={slidePrev} alt="" />
      </div>
      <div className="buttonNew">
      <img src={slideNew} alt="" />
      </div>
      <div className="pagination" style={{bottom: '20px'}}></div>
    </Swiper>
  );
}

export default SliderAdvertising;