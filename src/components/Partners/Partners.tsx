import style from "./Partners.module.scss";
import imagePart1 from "../../assets/img/BlackKliff.png";

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
    img: "./src",
    text: "Кейтеринг Smart Cook",
  },
  {
    id: "3",
    path: "#",
    img: "src",
    text: "Цветочный магазин Белая лилия",
  },
  {
    id: "4",
    path: "#",
    img: "src",
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
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
