import type { CustomSVGProps, ProjectMapType } from "../../types/types"
import ProjectBuild from "./ProjectBuildIcons"
import ProjectLinkBtns from "./ProjectLinks"

type ProjectContentsContainerProps = {
    children: React.ReactNode
    projectTitle: string
    projectDetails: ProjectMapType
    buildCustomStyle?: CustomSVGProps
    className?: string
}

export default function ProjectContentsContainer({ children, projectTitle, projectDetails, buildCustomStyle, className }: ProjectContentsContainerProps) {
    const { build, repoUrl, liveDemoUrl } = projectDetails
    
    return (
        <div className={`${className ?? ""} mb-5 *:mb-5 [&_h3]:text-xl [&_h3,&_h4]:font-bold [&_h3,&_h4]:text-(--text-h) [&_h3]:mb-2 [&_ul>li]:ml-10 [&_ul>li]:list-disc`}>
            {/* Project Title */}
            <h2 className="text-3xl font-bold text-(--text-h)">
                {projectTitle}
            </h2>

            {/* Project Links and Build Icon Display */}
            <div>
                <ProjectLinkBtns
                    liveDemoUrl={liveDemoUrl}
                    repoUrl={repoUrl}
                    className="mb-3"
                />

                <ProjectBuild
                    build={build}
                    logoProps={buildCustomStyle}
                />
            </div>
            <hr />

            {children}
        </div>
    )
}