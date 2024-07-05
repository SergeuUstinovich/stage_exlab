import Slider from "../../ui/Slider/Slider";
import img1 from "../../assets/img/Swiper-slide1.jpg";
import img2 from "../../assets/img/Swiper-slide2.jpg";
import img3 from "../../assets/img/Swiper-slide3.jpg";

function SlideAdvertising() {
  return (
    <Slider
      slider={[
        {
          src: img1,
          title: "Романтический ужин",
        },
        {
          src: img2,
          title: "Гендер пати",
        },
        {
          src: img3,
          title: "Романтический ужин",
        },
      ]}
    />
  );
}

export default SlideAdvertising;
