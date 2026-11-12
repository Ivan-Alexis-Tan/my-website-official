// Next.js
import { Link } from "react-router-dom";

// Helpers functions, etc.
import { searchProject } from "../../../helpers/projectsDbHelpers";

// Components
import ProjectCard from "../../helpers/ProjectCard";
import { projectIdLib } from "../../../data/projectIds";

export default function Sec4Projects() {
    const featuredProjects = searchProject("class", "featured")

    return (
        <div className="p-5">
            {/* Section Title */}
            <div className="mb-5 gap-3 flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-3">
                    <svg width={40} height={40}>
                        <use href="/icons.svg#projects" />
                    </svg>
                    <h1 className="text-4xl font-bold text-(--text-h)">Projects</h1>
                </div>
            
                {/* View all button */}
                <Link to={`/projects/${projectIdLib["5"]}`}
                    className="gap-1 flex items-center hover:text-(--accent)"
                >
                    <svg className="w-5 h-5">
                        <use href="/icons.svg#read-more" />
                    </svg>
                    <span>View All</span>
                </Link>
            </div>

            {/* Projects and Project Cards */}
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