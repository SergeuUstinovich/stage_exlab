import InfinitiStr from "../../components/InfiniteStr/InfinitiStr";
import SlideAdvertising from "../../components/SliderAdvertising/SlideAdvertising";
import SliderComments from "../../components/SliderComments/SliderComments";
import style from "./mainPage.module.scss";
import slideAdv1 from '../../assets/img/Swiper-slide1.jpg'
import slideAdv2 from '../../assets/img/Swiper-slide2.jpg'
import slideAdv3 from '../../assets/img/Swiper-slide3.jpg'
const SliderAdvertis = [
	{
		id: '1',
		src: slideAdv1,
		title: '',
		colorBg: '#4F2A6E',
		text: 'Только по четвергам романтический ужин в ресторане Радуга со скидкой 20%'
	},
	{
		id: '2',
		src: slideAdv2,
		title: '',
		colorBg: '#245083',
		text: 'Акции на проведение гендер-пати по средам и четвергам'
	},
	{
		id: '3',
		src: slideAdv3,
		title: '',
		colorBg: '#352820',
		text: 'Специальные предложения для зарегистрированных пользователей'
	}
]


function MainPage() {
  return (
    <>
      <div className={style.filter} /> {/* в перспективе филтр */}
	  <h1 className={style.title}>
	  	ЭКСКЛЮЗИВНЫЕ МЕРОПРИЯТИЯ
		<p className={style.descrtitle}>
			ДЛЯ ЯРКИХ ВПЕЧАТЛЕНИЙ
		</p>
	  </h1>
	  <SlideAdvertising slider={SliderAdvertis} />
	  <InfinitiStr />
	  <SliderComments />
    </>
  );
}

export default MainPage;
