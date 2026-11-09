import { Link } from "react-router-dom";
import { useState } from "react";

import { projectRoutes, searchProject } from "../../../helpers/projectsDbHelpers";

import IconLeftPanel from "../../svgs/icons/IconLeftPanel";
import IconHome from "../../svgs/icons/IconHome";
import IconBookmarkStar from "../../svgs/icons/IconBookmarkStar";
import SidebarDrawer from "./SidebarDrawer";

export default function ProjectSidebar({ className }: { className?: string}) {
    // Function: Project sidebar UI to display on projects page

    const [fullSidebar, setFullSidebar] = useState<boolean>(true)

    const featuredProjects = searchProject("class", "featured")
    const otherProjects = searchProject("class", "others")

    const ClosedSidebarIcon = ({ children }: { children: React.ReactNode }) => {
        // An Icon button to click and display when projects sidebar is closed
        return (
            <button onClick={_ => setFullSidebar(true)}>
                {children}
            </button>
        )
    }

    return fullSidebar 
        ? (
            // Opened Sidebar UI
            <header className={`${className ?? ""} w-50 h-screen sticky top-0 left-0 self-start
                               [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-(--text-h) border-r-2 border-(--border)`}
            >
                <nav className="mb-5 pl-4 pr-2 flex justify-between items-center">
                    <Link to={"/"} className="text-2xl flex items-center text-(--text-h) font-bold hover:[&_svg,&_span]:text-(--accent)">
                        <IconHome />
                        <span>Home</span>
                    </Link>

                    <button className="w-7 h-7 text-white hover:text-(--accent)"
                        onClick={_ => setFullSidebar(false)}
                    >
                        <IconLeftPanel kind="close" className="hover:text-(--accent)" />
                    </button>
                </nav>

                <SidebarDrawer drawerName="Featured" 
                    pocketComponents={projectRoutes(featuredProjects)}
                    drawerIcon={<IconBookmarkStar />}
                    className="mb-5"
                />

                <SidebarDrawer drawerName="Others"
                    pocketComponents={projectRoutes(otherProjects)}
                    drawerIcon={<svg><use href="/icons.svg#projects" /></svg>}
                    className="mb-5"
                />
            </header>
        )
        : (
            // Closed Sidebar UI
            <header className={`${className ?? ""} w-15 h-screen gap-3 sticky top-0 left-0 self-start sm:flex flex-col items-center
                [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-(--text-h) [&_svg]:hover:text-(--accent) border-r-2 border-(--border)`}
            >
                <button className="text-white hover:text-(--accent)"
                    onClick={_ => setFullSidebar(true)}
                >
                    <IconLeftPanel kind="open" />
                </button>

                <Link to={"/"}>
                    <IconHome />
                </Link>

                <hr className="w-10" />

                {/* Featured Projects */}
                <ClosedSidebarIcon>
                    <IconBookmarkStar title="Featured Projects" />
                </ClosedSidebarIcon>

                {/* Other Projects */}
                <ClosedSidebarIcon>
                    <svg>
                        <title>Other Projects</title>
                        <use href="/icons.svg#projects" />
                    </svg>
                </ClosedSidebarIcon>
            </header>
        )
}

