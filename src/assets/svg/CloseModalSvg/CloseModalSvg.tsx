interface CloseModalProps {
    className?: string
    onCloses?: () => void
}

function CloseModalSvg({className, onCloses}:CloseModalProps) {
    return (
        <div onClick={onCloses}>
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L19 19M5.00003 19L12 12L19 5" stroke="#555555" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </div> 
    )
}

export default CloseModalSvg