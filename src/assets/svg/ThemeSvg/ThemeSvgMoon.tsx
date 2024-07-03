import { classNames } from "../../../utils/classNames";

interface ThemeMoonProps {
  className?: string;
}

function ThemeSvgMoon(props: ThemeMoonProps) {
  const { className = "" } = props;
  return (
    <svg
      className={classNames("svgColors", {}, [className])}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17977 8.25939C10.8464 12.8782 15.8564 11.5253 12.6678 13.3662C9.47918 15.2072 5.40191 14.1147 3.56096 10.9261C1.72002 7.73743 2.81252 3.66017 6.00113 1.81922C9.18975 -0.0217331 5.5131 3.64058 8.17977 8.25939Z"
        stroke="#BDBBBE"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default ThemeSvgMoon;
