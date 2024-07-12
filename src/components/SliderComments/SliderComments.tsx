import { Swiper, SwiperSlide } from "swiper/react";
import style from "./SliderComments.module.scss";
import { A11y, Navigation } from "swiper/modules";
import CommentsItem, { CommentsItemProps } from "../CommentsItem/CommentsItem";
import commSlideRight from "../../assets/img/comment_slide_right.png";
import commSlideLeft from "../../assets/img/comment_slide_left.png";
import "./SliderComments.scss";
import "swiper/scss";
import "swiper/scss/navigation";
interface SliderProps {
  slider: CommentsItemProps[];
}

function SliderComments(props: SliderProps) {
  const { slider } = props;

  return (
    <div className={style.blockComments}>
      <h2 className={style.reviews}>Отзывы</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".commNew",
          prevEl: ".commPrev",
        }}
        loop
        className={style.swiper}
      >
        {slider.map((item) => (
          <SwiperSlide key={item.img} className={style.swiperslide}>
            <CommentsItem
              name={item.name}
              time={item.time}
              raiting={item.raiting}
              year={item.year}
              textComm={item.textComm}
              img={item.img}
            />
          </SwiperSlide>
        ))}
        <div className="commPrev">
          <img src={commSlideLeft} alt="" />
        </div>
        <div className="commNew">
          <img src={commSlideRight} alt="" />
        </div>
      </Swiper>
    </div>
  );
}

export default SliderComments;
