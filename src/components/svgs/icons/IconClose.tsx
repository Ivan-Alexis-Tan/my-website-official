type IconCloseProps = {
    className?: string
    kind?: "large" | "small"
}

export default function IconClose({ className, kind }: IconCloseProps) {
    switch(kind) {
        case "small":
            return (
                <svg className={className ?? ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
                </svg>
            )
        default:
            return (
                <svg className={className ?? ""}  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            )
    }
}