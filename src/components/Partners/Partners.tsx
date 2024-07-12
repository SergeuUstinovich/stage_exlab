import style from "./Partners.module.scss";
import imagePart1 from "../../assets/img/BlackKliff.png";
import imagePart2 from "../../assets/img/SmartCook.png";
import imagePart3 from "../../assets/img/WhiteLily.png";
import imagePart4 from "../../assets/img/Tibet.png";

const arrPartn = [
  {
    id: "1",
    path: "#",
    img: imagePart1,
    text: "Ивент-пространство BLACK CLIFF",
  },
  {
    id: "2",
    path: "#",
    img: imagePart2,
    text: "Кейтеринг Smart Cook",
  },
  {
    id: "3",
    path: "#",
    img: imagePart3,
    text: "Цветочный магазин Белая лилия",
  },
  {
    id: "4",
    path: "#",
    img: imagePart4,
    text: "Ресторан Тибет",
  },
];

function Partners() {
  return (
    <div className={style.partnersWrapper}>
      <p className={style.partnersDescr}>Наши партнеры</p>
      <ul className={style.partnersList}>
        {arrPartn.map((item) => (
          <li key={item.id} className={style.partnersItem}>
            <img src={item.img} alt={item.text} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
