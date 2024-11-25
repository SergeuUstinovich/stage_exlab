interface OpeningHoursProps {
    className?: string;
}

function OpeningHours({ className }: OpeningHoursProps) {
    return (
        <svg
            className={className}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clip-path='url(#clip0_1279_3660)'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM12 12H18V13H11V4H12V12Z'
                    fill='black'
                />
            </g>
            <defs>
                <clipPath id='clip0_1279_3660'>
                    <rect width='24' height='24' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
}

export default OpeningHours;
