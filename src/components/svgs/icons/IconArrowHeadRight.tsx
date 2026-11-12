type IconArrowHeadRightProps = {
    kind?: "small" | "big"
    title?: string
    className?: string
}

export default function IconArrowHeadRight({ kind = "small", title = "Next", className }: IconArrowHeadRightProps) {
    return ( 
        kind === "big"
            ? <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <title>{title}</title>
                <path d="M8.03,22L6.25,20.23L14.48,12L6.25,3.77L8.03,2l10,10l-10,10Z"/>
            </svg>
            : <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.6,12L8,7.4L9.4,6l6,6l-6,6L8,16.6L12.6,12Z"/>
            </svg>
    )
}