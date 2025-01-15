interface MapPointProps {
    className?: string;
}

function MapPoint({ className }: MapPointProps) {
    return (
        <svg
            className={className}
            width='16'
            height='24'
            viewBox='0 0 16 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8 10C6.896 10 6 9.104 6 8C6 6.896 6.896 6 8 6C9.104 6 10 6.896 10 8C10 9.104 9.104 10 8 10ZM8 5C6.343 5 5 6.343 5 8C5 9.657 6.343 11 8 11C9.657 11 11 9.657 11 8C11 6.343 9.657 5 8 5ZM1 7.602C1 4.085 4.271 1 8 1C11.729 1 15 4.085 15 7.602C15 11.057 12.437 15.145 8 22.129C3.511 15.056 1 11.057 1 7.602ZM8 0C3.802 0 0 3.403 0 7.602C0 11.8 3.469 16.812 8 24C12.531 16.812 16 11.8 16 7.602C16 3.403 12.199 0 8 0Z'
                fill='black'
            />
        </svg>
    );
}

export default MapPoint;
