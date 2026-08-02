import { Link } from "react-router-dom";

import { searchProject } from "../../../helpers/projectsDbHelpers";

import ProjectCard from "../../helpers/ProjectCard";

export default function Sec4Projects() {
    const featuredProjects = searchProject("class", "featured")

    return (
        <div className="p-5">
            {/* Section Title */}
            <div className="mb-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <svg width={40} height={40}>
                        <use href="/icons.svg#projects" />
                    </svg>
                    <h1 className="text-4xl font-bold text-(--text-h)">Projects</h1>
                </div>
            
                <Link to={"/projects/personal-finance-manager"}
                    className="gap-1 flex items-center hover:text-(--accent)"
                >
                    <svg className="w-5 h-5">
                        <use href="/icons.svg#read-more" />
                    </svg>
                    <span>View all</span>
                </Link>
            </div>

            <h2 className="text-2xl font-bold text-(--text-h) mb-2">Featured:</h2>
            <div className="mb-5 mx-auto gap-5 flex flex-wrap justify-center">
                {featuredProjects.map(proj => (
                    <ProjectCard key={proj.id}
                        imgSrc={proj.imgSrc}
                        title={proj.name}
                        route={proj.route}
                        repoUrl={proj.repoUrl}
                        liveDemoUrl={proj.liveDemoUrl as string}
                        build={proj.build}
                    />
                ))}
            </div>
        </div>
    )
}