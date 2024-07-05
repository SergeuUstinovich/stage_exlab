import InfinitiStr from "../../components/InfiniteStr/InfinitiStr";
import SlideAdvertising from "../../components/SliderAdvertising/SlideAdvertising";
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
    </>
  );
}

export default MainPage;
