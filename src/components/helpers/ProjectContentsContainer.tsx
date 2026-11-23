// Helper functions
import { alphanumericDate } from "../../helpers/generalHelpers"

// Types
import type { CustomSVGProps, ProjectMapType } from "../../types/types"

// Components
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
    const { build, repoUrl, liveDemoUrl, dateCreated, deploymentDate } = projectDetails

    const createdFrom = alphanumericDate(dateCreated.from, false)
    const createdUntil = dateCreated.until === "Present" 
        ? dateCreated.until
        : alphanumericDate(dateCreated.until as Date | string, false)
    
    return (
        <div className={`${className ?? ""} max-w-250 mx-auto mb-5 *:mb-5 [&_h3]:text-xl [&_h3,&_h4]:font-bold [&_h3,&_h4]:text-(--text-h) [&_h3]:mb-2 [&_ul>li]:ml-10 [&_ul>li]:list-disc`}>
            {/* Project Title */}
            <h2 className="text-3xl font-bold text-(--text-h)">
                {projectTitle}
            </h2>

            {/* Project Links and Build Icon Display */}
            <div className="mb-3!">
                <ProjectLinkBtns
                    liveDemoUrl={liveDemoUrl}
                    repoUrl={repoUrl}
                    className="mb-1"
                />

                <ProjectBuild
                    build={build}
                    logoProps={buildCustomStyle}
                />
            </div>

            {/* Date Created and Deployment Date */}
            <div className="*:mb-1">
                <p>Date Created: {createdFrom} &rarr; {createdUntil}</p>
                <p><i>Date Deployed</i>: {deploymentDate ? alphanumericDate(deploymentDate, false) : "Not deployed"}</p>
            </div>
            <hr />

            {children}
        </div>
    )
}