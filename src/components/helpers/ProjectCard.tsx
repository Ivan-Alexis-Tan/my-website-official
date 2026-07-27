import { Link } from "react-router-dom"

import type { ProjectMapType } from "../../types/types"

import ProjectLinkBtns from "./ProjectLinks"
import ProjectBuild from "./ProjectBuildIcons"

type ProjectCardProp = Omit<ProjectMapType, "component" | "class" | "id" | "name"> & {
    title: ProjectMapType["name"]
    className?: string
}

export default function ProjectCard({ imgSrc, title, build, route, repoUrl, liveDemoUrl, className }: ProjectCardProp) {
    return (
        <div className={`${className ?? ""} max-w-125 rounded-2xl transition-all
                        border border-(--accent-bg) hover:border-(--accent)`}
        >
            <Link to={route}>
                <img src={imgSrc} width={500} height={400} className="rounded-t-2xl" />
            </Link>

            <div className="pl-3 pb-1 flex flex-col gap-2 bg-(--accent-bg) rounded-b-2xl">
                <Link to={route}>
                    <h3 className="text-xl font-bold text-(--text-h) hover:text-(--accent)">{title}</h3>
                </Link>

                <ProjectLinkBtns repoUrl={repoUrl} liveDemoUrl={liveDemoUrl as string} />
                <ProjectBuild build={build} />
            </div>
        </div>
    )
}