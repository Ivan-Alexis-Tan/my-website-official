import type { SVGComponentProps } from "../../../types/types";

type IconComponentProps = SVGComponentProps & {
    kind?: "down" | "up" | "left" | "right"
}

export default function IconKeebArrow({ 
    className, 
    title = true, 
    kind = "down"
}: IconComponentProps
) {
    switch(kind) {
        case "left":
            return (
                <svg className={className ?? ""} xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="currentColor">
                    {title && <title>{title === true ? "Go left" : title}</title>}
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                </svg>
            )
        case "right":
            return (
                <svg className={className ?? ""} xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="currentColor">
                    {title && <title>{title === true ? "Go right" : title}</title>}
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                </svg>
            )
        case "up":
            return (
                <svg className={className ?? ""} xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="currentColor">
                    {title && <title>{title === true ? "Go up" : title}</title>}
                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
                </svg>
            )
        default:
            return (
                <svg className={className ?? ""} xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="currentColor">
                    {title && <title>{title === true ? "Go down" : title}</title>}
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                </svg>
            )
    }
}