interface ShowPasswordProps {
  className?: string;
}

export function HidePassword({ className }: ShowPasswordProps) {
  return (
    <svg
      className={className}
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.998 5C7.92 5 4.256 8.093 2.145 11.483C2.049 11.642 2 11.821 2 12C2 12.179 2.048 12.358 2.144 12.517C4.256 15.907 7.92 19 11.998 19C16.141 19 19.794 15.91 21.862 12.507C21.954 12.351 22 12.175 22 12C22 11.825 21.954 11.649 21.862 11.493C19.794 8.09 16.141 5 11.998 5ZM12 8C14.208 8 16 9.792 16 12C16 14.208 14.208 16 12 16C9.792 16 8 14.208 8 12C8 9.792 9.792 8 12 8ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5Z" fill="#BDBBBE" />
    </svg>

  )
}