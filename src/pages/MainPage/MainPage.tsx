import InfinitiStr from "../../components/InfiniteStr/InfinitiStr";
import SlideAdvertising from "../../components/SliderAdvertising/SlideAdvertising";
import SliderComments from "../../components/SliderComments/SliderComments";
import style from "./mainPage.module.scss";


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
	  <SlideAdvertising />
	  <InfinitiStr />
	  <SliderComments />
    </>
  );
}

export default MainPage;
