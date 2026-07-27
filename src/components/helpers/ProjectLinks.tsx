import type { ProjectMapType } from "../../types/types"
import GitHubLogo from "../svgs/logos/GitHubLogo"

type ProjectLinkBtnsProps = Pick<ProjectMapType, "liveDemoUrl" | "repoUrl"> 
    & { className?: string }

export default function ProjectLinkBtns({ liveDemoUrl, repoUrl, className }: ProjectLinkBtnsProps) {
    return (
        <div className={`${className ?? ""} flex gap-5`}>
            {liveDemoUrl 
                && <a className="flex gap-1 items-center px-1 hover:bg-(--text) hover:text-(--bg) rounded-2xl"
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg width={15} height={15}><use href="/icons.svg#globe"/></svg>
                    <span>Live Demo</span>
                </a>
            }

            <a className="flex gap-1 items-center px-1 hover:bg-(--text) hover:text-(--bg) rounded-2xl"
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubLogo className="w-4 h-4" />
                <span>Repo</span>
            </a>
        </div>
    )
}