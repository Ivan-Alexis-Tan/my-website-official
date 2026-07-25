import { useParams } from "react-router-dom";

import { DisplayProject } from "../../../helpers/projectsHelpers";

import ProjectSidebar from "./ProjectSidebar";

export default function ProjectsPage() {
    const { id } = useParams()

    return (
        <div className="flex *:border">
            <ProjectSidebar />

            <main className="flex-1 mx-5">
                <h1 className="text-4xl text-(--text-h) font-bold">Projects</h1>

                {DisplayProject(id as string)}
            </main>
        </div>
    )
}