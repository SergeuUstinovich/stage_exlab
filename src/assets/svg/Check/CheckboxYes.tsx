interface CheckboxYesProps {
  className?: string;
}

function CheckboxYes({ className }: CheckboxYesProps) {
  return (
    <svg
      className={className} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.39644 7.58214L0.14644 4.33214C-0.0488135 4.13689 -0.0488135 3.82031 0.14644 3.62503L0.85353 2.91792C1.04878 2.72265 1.36539 2.72265 1.56064 2.91792L3.74999 5.10726L8.43935 0.417925C8.6346 0.222671 8.95121 0.222671 9.14646 0.417925L9.85355 1.12503C10.0488 1.32029 10.0488 1.63687 9.85355 1.83214L4.10355 7.58216C3.90828 7.77742 3.59169 7.77742 3.39644 7.58214Z" fill="#555555" />
    </svg>
  )
}

export default CheckboxYes;