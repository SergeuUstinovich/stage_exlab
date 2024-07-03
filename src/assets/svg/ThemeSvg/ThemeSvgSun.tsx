import { classNames } from "../../../utils/classNames";

interface ThemeSunProps {
  className?: string;
}

function ThemeSvgSun(props: ThemeSunProps) {
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
      <g clipPath="url(#clip0_2001_1700)">
        <path
          d="M8.00002 0.666504V1.99984M8.00002 13.9998V15.3332M15.3334 7.99984H14M2.00002 7.99984H0.666687M13.1855 2.81439L12.2427 3.7572M3.75738 12.2425L2.81457 13.1853M13.1855 13.1853L12.2427 12.2425M3.75738 3.7572L2.81457 2.81439M12 7.99984C12 10.209 10.2092 11.9998 8.00002 11.9998C5.79088 11.9998 4.00002 10.209 4.00002 7.99984C4.00002 5.7907 5.79088 3.99984 8.00002 3.99984C10.2092 3.99984 12 5.7907 12 7.99984Z"
          stroke="#555555"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_1700">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ThemeSvgSun;
