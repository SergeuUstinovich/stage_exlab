
interface CheckboxProps {
  className?: string;
  isActive: boolean;
}

function Checkbox({ className, isActive }: CheckboxProps) {
  if (isActive) {
    return (
      <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="white" stroke="#BDBBBE" />
        <g clipPath="url(#clip0_134_5020)">
          <path d="M7.39644 12.5821L4.14644 9.33214C3.95119 9.13689 3.95119 8.82031 4.14644 8.62503L4.85353 7.91792C5.04878 7.72265 5.36539 7.72265 5.56064 7.91792L7.74999 10.1073L12.4394 5.41792C12.6346 5.22267 12.9512 5.22267 13.1465 5.41792L13.8535 6.12503C14.0488 6.32029 14.0488 6.63687 13.8535 6.83214L8.10355 12.5822C7.90828 12.7774 7.59169 12.7774 7.39644 12.5821Z" fill="#555555" />
        </g>
        <defs>
          <clipPath id="clip0_134_5020">
            <rect width="10" height="10" fill="white" transform="translate(4 4)" />
          </clipPath>
        </defs>
      </svg>
    )
  }
  return (
    <svg
      className={className}
      width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="white" stroke="#BDBBBE" />

    </svg>
  )
}

export default Checkbox;

