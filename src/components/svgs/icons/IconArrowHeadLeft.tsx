type IconArrowHeadLeftProps = {
    kind?: "small" | "big"
    title?: string
    className?: string
}

export default function IconArrowHeadLeft({ kind = "small", title = "Previous", className }: IconArrowHeadLeftProps) {
    return ( 
        kind === "big"
            ? <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <title>{title}</title>
                <path d="M10,22L0,12L10,2l1.78,1.77L3.55,12l8.23,8.23L10,22Z"/>
            </svg>
            : <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <title>{title}</title>
                <path d="M14,18L8,12l6-6l1.4,1.4L10.8,12l4.6,4.6L14,18Z"/>
            </svg>
    )
}