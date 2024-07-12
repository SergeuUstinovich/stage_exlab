import { CommentsItemProps } from "./CommentsItem";
import style from "./CommentCard.module.scss";
import { StarRating } from "./StarRaiting";

function CommentCard(props: CommentsItemProps) {
  const { name, time, raiting, year, textComm, img } = props;
  return (
    <>
      <div className={style.infoUser}>
        <img className={style.imgUser} src={img} alt="" />
        <div>
          <p className={style.name}>{name}</p>
          <span className={style.time}>{time} на all inclusive</span>
        </div>
      </div>
      <div className={style.blockRait}>
        <div className={style.rait}>
          <StarRating raiting={raiting} />
        </div>
        <p className={style.years}>{year}</p>
      </div>
      <p className={style.descr}>{textComm}</p>
    </>
  );
}

export default CommentCard;
