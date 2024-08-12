import { ReactNode, useEffect, useRef, useState, } from "react";
import style from "./Selector.module.scss"
import ArrowSVGDown from "../../../assets/svg/ArrowSVGDown";
import { classNames } from "../../../utils/classNames";
import useDetectClickOutside from "../../../hook/useDetectClickOutside";


interface ISelectorProps {
  title: string,
  children: ReactNode,
}

function Selector({ title, children }: ISelectorProps) {
  const [isActive, setActive] = useState(false);
  const listStyle = classNames(style.optionsContainer, {
    [style.optionsActive]: isActive,
  })
  const workspaceRef = useRef(null);
  const isClickOutside = useDetectClickOutside(workspaceRef);

  useEffect(() => {
    if (!isClickOutside) {
      setActive(false);
    }
  }, [isClickOutside])

  return (
    <div ref={workspaceRef} className={style.selectorContainer}>
      <button type='button' className={style.btnSelector} onClick={() => setActive(!isActive)}>
        <span className={style.btnTitle}>
          {title}
        </span>
        <ArrowSVGDown className={style.btnSVG} />
      </button>
      <div onClick={() => {
        setActive(!isActive);
      }} className={listStyle}>
        {children}
      </div>
    </div>
  )
}

export default Selector;