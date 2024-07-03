import { classNames } from "../../../utils/classNames";

interface AvatarStyle {
  className?: string;
}

function AvatarNoName(props: AvatarStyle) {
  const { className = "" } = props;
  return (
    <svg
      className={classNames("svgColor", {}, [className])}
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5833 10.5001C19.5833 13.0314 17.5313 15.0834 15 15.0834V16.5834C18.3597 16.5834 21.0833 13.8598 21.0833 10.5001H19.5833ZM15 15.0834C12.4687 15.0834 10.4166 13.0314 10.4166 10.5001H8.91663C8.91663 13.8598 11.6402 16.5834 15 16.5834V15.0834ZM10.4166 10.5001C10.4166 7.96878 12.4687 5.91675 15 5.91675V4.41675C11.6402 4.41675 8.91663 7.14035 8.91663 10.5001H10.4166ZM15 5.91675C17.5313 5.91675 19.5833 7.96878 19.5833 10.5001H21.0833C21.0833 7.14035 18.3597 4.41675 15 4.41675V5.91675ZM11 20.5834H19V19.0834H11V20.5834ZM2.41663 14.5001C2.41663 7.5505 8.05038 1.91675 15 1.91675V0.416748C7.22195 0.416748 0.916626 6.72207 0.916626 14.5001H2.41663ZM15 1.91675C21.9495 1.91675 27.5833 7.5505 27.5833 14.5001H29.0833C29.0833 6.72207 22.778 0.416748 15 0.416748V1.91675ZM27.5833 14.5001C27.5833 18.0687 26.0988 21.2893 23.7116 23.5802L24.7502 24.6625C27.4199 22.1004 29.0833 18.4938 29.0833 14.5001H27.5833ZM23.7116 23.5802C21.4499 25.7507 18.3814 27.0834 15 27.0834V28.5834C18.7838 28.5834 22.2204 27.0902 24.7502 24.6625L23.7116 23.5802ZM19 20.5834C21.2229 20.5834 23.0778 22.1667 23.4953 24.2675L24.9665 23.9751C24.4122 21.186 21.9524 19.0834 19 19.0834V20.5834ZM15 27.0834C11.6186 27.0834 8.55 25.7507 6.28835 23.5802L5.24974 24.6625C7.77948 27.0902 11.2161 28.5834 15 28.5834V27.0834ZM6.28835 23.5802C3.90115 21.2893 2.41663 18.0687 2.41663 14.5001H0.916626C0.916626 18.4938 2.58 22.1004 5.24974 24.6625L6.28835 23.5802ZM11 19.0834C8.04748 19.0834 5.58774 21.186 5.03343 23.9751L6.50466 24.2675C6.92217 22.1667 8.77699 20.5834 11 20.5834V19.0834Z"
        fill="#555555"
      />
    </svg>
  );
}

export default AvatarNoName;
