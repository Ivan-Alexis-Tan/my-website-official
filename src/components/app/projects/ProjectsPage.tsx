import { useParams } from "react-router-dom";

import { DisplayProject } from "../../../helpers/projectsDbHelpers";

import ProjectSidebar from "./ProjectSidebar";
import ProjectNavbar from "./ProjectNavbar";

export default function ProjectsPage() {
    const { id } = useParams()

    return (
        <div className="flex">
            <ProjectSidebar className="hidden sm:block" />

            <main className="flex-1 mx-5">
                <ProjectNavbar className="sm:hidden mb-5" />

                <h1 className="mb-5 hidden sm:block text-4xl text-(--text-h) font-bold">Projects</h1>

                <div className="mx-5">
                    {DisplayProject(id as string)}
                </div>
            </main>
        </div>
    )
}