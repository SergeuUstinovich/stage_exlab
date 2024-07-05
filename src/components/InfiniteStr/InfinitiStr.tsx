import style from './InfinitiStr.module.scss'
import img1 from '../../assets/img/infinitiStr1.jpg'
import img2 from '../../assets/img/infinitiStr2.jpg'
import img3 from '../../assets/img/infinitiStr3.jpg'

function InfinitiStr() {
  return (
      <div className={style.itemsWrap}>
        <div className={`${style.items} ${style.marquee}`}>
          <div className={style.item}>
            <img className={style.imgInf} src={img1} />
            <p>РАДОСТНЫЕ УЛЫБКИ</p>
          </div>
          <div className={style.item}>
          <img className={style.imgInf} src={img2} />
          <p>НОВЫЕ ВПЕЧАТЛЕНИЯ</p>
          </div>
          <div className={style.item}>
          <img className={style.imgInf} src={img3} />
          <p>НЕЗАБЫВАЕМЫЕ ЭМОЦИИ</p>
          </div>
          
        </div>
        <div aria-hidden="true" className={`${style.items} ${style.marquee}`}>
          <div className={style.item}>
          <img className={style.imgInf} src={img1} />
          <p>РАДОСТНЫЕ УЛЫБКИ</p>
          </div>
          <div className={style.item}>
          <img className={style.imgInf} src={img2} />
          <p>НОВЫЕ ВПЕЧАТЛЕНИЯ</p>
          </div>
          <div className={style.item}>
          <img className={style.imgInf} src={img3} />
          <p>НЕЗАБЫВАЕМЫЕ ЭМОЦИИ</p>
          </div>
        </div>
      </div>
  );
}

export default InfinitiStr;
