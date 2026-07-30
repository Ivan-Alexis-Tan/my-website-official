import type { ComponentType } from "react"
import type { projectIds } from "../database/projectsData"
import type { LogoKey } from "./logosMapTypes"

export interface ComponentAndName {
    name: string
    comp: ComponentType<{}>
}

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
    build: LogoKey[]
    imgSrc: string
    class: "featured" | "others"
}

export type ProjectId = typeof projectIds[number]