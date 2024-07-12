import { Button } from "../../ui/Button";
import style from "./CommentsItem.module.scss";
import { useState } from "react";
import CommentCard from "./CoommentCard";
import Modal from "../../ui/Modal/Modal";

export interface CommentsItemProps {
  name: string;
  time: string;
  raiting: number;
  year: string;
  textComm: string;
  img: string;
}

function CommentsItem(props: CommentsItemProps) {
  const { name, time, raiting, year, textComm, img } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={style.comment}>
      <CommentCard
        name={name}
        time={time}
        raiting={raiting}
        year={year}
        textComm={textComm}
        img={img}
      />
      <Button onClick={handleOpenModal} className={style.btn}>Подробнее</Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal} hiddenClose>
          <CommentCard
            name={name}
            time={time}
            raiting={raiting}
            year={year}
            textComm={textComm}
            img={img}
          />
        </Modal>
      )}
    </div>
  );
}

export default CommentsItem;
