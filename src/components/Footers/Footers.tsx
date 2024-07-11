import InstagramSvg from "../../assets/svg/InstagramSvg/InstagramSvg";
import TelegramSvg from "../../assets/svg/TelegramSvg/TelegramSvg";
import WhatsappSvg from "../../assets/svg/WhatsappSvg/WhatsappSvg";
import style from "./Footers.module.scss";
import LogoFooter from "../../assets/img/LogoFooter.png";

const arrNav = [
  {
    id: "1",
    text: "Политика конфиденциальности",
    path: "#",
  },
  {
    id: "2",
    text: "Контакты",
    path: "#",
  },
  {
    id: "3",
    text: "Служба поддержки",
    path: "#",
  },
];

const arrSoc = [
  {
    id: "1",
    aria: "Найти нас в Телеграм",
    path: "#",
    svg: <TelegramSvg />,
  },
  {
    id: "2",
    aria: "Найти нас в Ватсап",
    path: "#",
    svg: <WhatsappSvg />,
  },
  {
    id: "3",
    aria: "Найти нас в Инстаграм",
    path: "#",
    svg: <InstagramSvg />,
  },
];

function Footers() {
  return (
    <div className={style.footers}>
      <div className={style.footersContainer}>
        <div className={style.footersLogoWrapper}>
          <div className={style.footersLogo}>
            <img src={LogoFooter} alt="Логотип" />
          </div>
          <div className={style.footersAdress}>
            <p className={style.adressDescr}>ООО &laquo;ДОНАТЕЛЛО&raquo;</p>
            <p className={style.adressDescr}>
              Адрес: Республика Беларусь г. Минск, ул. Леонардо Да&nbsp;Винчи,
              2, +375-77-777-77-77
            </p>
            <p className={style.adressDescr}>
              Режим работы Пн.-Пт.&nbsp;10.00-16.00
            </p>
            <p className={style.adressDescr}>
              ЗАО &laquo;Альфа Банк&raquo;, г. Минск, ул. Сурганова, 43-47, р/с
              7777 7777 7777 7777
            </p>
          </div>
        </div>
        <div className={style.footersLinksWrapper}>
          <ul className={style.footersList}>
            {arrNav.map((item) => (
              <li key={item.id} className={style.footersLinksItem}>
                <a href={item.path} className={style.footersLink}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.footersSocialWrapper}>
          <p className={style.footersSocialDescr}>Мы в соцсетях</p>
          <ul className={style.social}>
            {arrSoc.map((item) => (
              <li
                key={item.id}
                aria-label={item.aria}
                className={style.socialItem}
              >
                <a href={item.path} className={style.socialLink}>
                  {item.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footers;
