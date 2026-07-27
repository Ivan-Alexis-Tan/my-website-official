import { useParams } from "react-router-dom";

import { DisplayProject } from "../../../helpers/projectsDbHelpers";

import ProjectSidebar from "./ProjectSidebar";

export default function ProjectsPage() {
    const { id } = useParams()

    return (
        <div className="flex">
            <ProjectSidebar />

            <main className="flex-1 mx-5">
                <h1 className="text-4xl text-(--text-h) font-bold mb-5">Projects</h1>

                <div className="mx-5">
                    {DisplayProject(id as string)}
                </div>
            </main>
        </div>
    )
}