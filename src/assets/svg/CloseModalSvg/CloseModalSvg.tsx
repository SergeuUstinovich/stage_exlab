import { classNames } from "../../../utils/classNames";

interface CloseModalProps {
  className?: string;
  onCloses?: () => void;
}

function CloseModalSvg({ className = "", onCloses }: CloseModalProps) {
  return (
    <svg
      onClick={onCloses}
      className={classNames("svgColors", {}, [className])}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19 19M5.00003 19L12 12L19 5"
        stroke="#555555"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CloseModalSvg;
