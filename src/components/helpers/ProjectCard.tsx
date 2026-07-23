import GitHubLogo from "../svgs/logos/GitHubLogo"

type ProjectCardProp = {
    imgSrc: string
    title: string
    build: React.ReactNode[]
    repoUrl: string
    liveDemoUrl?: string
    className?: string
}

export function mapFeaturedProj({ imgSrc, title, build, repoUrl, liveDemoUrl, className }: ProjectCardProp) {
    return { imgSrc, title, build, repoUrl, liveDemoUrl, className }
} 

export default function ProjectCard({ imgSrc, title, build, repoUrl, liveDemoUrl, className }: ProjectCardProp) {
    return (
        <div className={`${className ?? ""} max-w-125`}>
            <img src={imgSrc} width={500} height={400} />

            <div className="*:mb-1.5 pl-3 pb-1 bg-(--accent-bg) rounded-b-2xl">
                <h3 className="text-xl font-bold text-(--text-h)">{title}</h3>

                <div className="flex gap-5">
                    {liveDemoUrl && <a className="flex gap-1 items-center px-1 hover:bg-(--text) hover:text-(--bg) rounded-2xl"
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width={15} height={15}><use href="/icons.svg#globe"/></svg>
                        <span>Live Demo</span>
                    </a>}

                    <a className="flex gap-1 items-center px-1 hover:bg-(--text) hover:text-(--bg) rounded-2xl"
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubLogo className="w-3 h-3" />
                        <span>Repo</span>
                    </a>
                </div>

                <div className="flex flex-wrap gap-2 items-center [&_svg]:w-5 [&_svg]:h-5">
                    <div className="flex gap-1 items-center">
                        <svg width={20} height={20}><use href="/icons.svg#test"/></svg>
                        <span>Build:</span>
                    </div>

                    {build.map((logo, idx) => (
                        <div key={idx}>{logo}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}