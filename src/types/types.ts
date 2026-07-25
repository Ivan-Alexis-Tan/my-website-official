import type { ComponentType } from "react"

export interface SVGComponentProps {
    className?: string
    title?: string | boolean
    theme?: "dark" | "light"
}

export type ProjectMapType = {
    id: string
    name: string
    route: string
    component: ComponentType<Pick<SVGComponentProps, "className">> | null
    repoUrl: string
    liveDemoUrl: string | null
    build: string[]
    imgSrc: string
    class: "featured" | "others"
}