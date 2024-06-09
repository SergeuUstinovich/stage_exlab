interface BurgerProps {
    className?: string
}

function BurgerMenu({className}: BurgerProps) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66663 24H25.3333M6.66663 8H25.3333M6.66663 16H25.3333" stroke="#555555" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export default BurgerMenu