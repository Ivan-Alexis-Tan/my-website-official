import { Link } from "react-router-dom";
import { featuredProj } from "../../../helpers/projectData";

import ProjectCard from "../../helpers/ProjectCard";

export default function Sec4Projects() {
    return (
        <div className="p-5">
            {/* Section Title */}
            <div className="flex gap-3 mb-5">
                <svg width={40} height={40}>
                    <use href="/icons.svg#projects" />
                </svg>
                <h1 className="text-4xl font-bold text-(--text-h)">Projects</h1>
            </div>

            <div className="mb-5 mx-auto gap-5 flex flex-wrap justify-center">
                {featuredProj.map(proj => (
                    <ProjectCard key={proj.title}
                        imgSrc={proj.imgSrc}
                        title={proj.title}
                        repoUrl={proj.repoUrl}
                        liveDemoUrl={proj.liveDemoUrl}
                        build={proj.build}
                    />
                ))}
            </div>

            <Link to={"/projects"}
                className="gap-1 flex items-center hover:text-(--accent)"
            >
                <svg className="w-5 h-5">
                    <use href="/icons.svg#read-more" />
                </svg>
                <span>View all</span>
            </Link>
        </div>
    )
}