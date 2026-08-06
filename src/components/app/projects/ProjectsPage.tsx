import { useParams } from "react-router-dom";

import type { ProjectId } from "../../../types/types";

import { DisplayProject } from "../../../helpers/projectsDbHelpers";
import { projectIds } from "../../../database/projectsData";

import ProjectSidebar from "./ProjectSidebar";
import ProjectNavbar from "./ProjectNavbar";
import ScrollToTop from "./ScrollToTop";
import NotFoundPage from "../../helpers/NotFoundPage";

export default function ProjectsPage() {
    const { id } = useParams()

    if (!projectIds.includes(id as ProjectId)) return <NotFoundPage />

    return (
        <div className="flex">
            <ScrollToTop />
            <ProjectSidebar className="hidden sm:block" />

            <main className="flex-1 sm:mx-5">
                <ProjectNavbar className="px-5 py-2 mb-5 sticky top-0 left-0 sm:hidden bg-(--bg)" />

                <h1 className="mb-5 hidden sm:block text-4xl text-(--text-h) font-bold">Projects</h1>

                <div className="mx-5">
                    {DisplayProject(id as string)}
                </div>
            </main>
        </div>
    )
}