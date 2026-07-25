import { Link } from "react-router-dom";
import { useState } from "react";

import IconLeftPanel from "../../svgs/icons/IconLeftPanel";
import IconHome from "../../svgs/icons/IconHome";
import IconBookmarkStar from "../../svgs/icons/IconBookmarkStar";
import SidebarDrawer from "./SidebarDrawer";
import { searchProject } from "../../../helpers/projectsHelpers";

export default function ProjectSidebar() {
    const [fullSidebar, setFullSidebar] = useState<boolean>(true)
    
    const featuredProjects = searchProject("class", "featured")
    function refineProjects() {
        return featuredProjects.map(proj => ({name: proj.name, link: proj.route}))
    }

    return fullSidebar 
        ? (
            <header className="w-50 ah-screen sticky top-0 left-0 self-start
                               [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-(--text-h)"
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
                    pocketComponents={refineProjects()}
                    drawerIcon={<IconBookmarkStar />}
                    className="mb-5"
                />

                {/* <SidebarDrawer drawerName="Others"
                    pocketComponents={["Test 1", "Test 2"]}
                    drawerIcon={<svg><use href="/icons.svg#projects" /></svg>}
                    className="mb-5"
                /> */}
            </header>
        )
        : (
            <header className="w-15 ah-screen gap-3 sticky top-0 left-0 self-start flex flex-col items-center
                [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-(--text-h) [&_svg]:hover:text-(--accent)"
            >
                <button className="text-white hover:text-(--accent)"
                    onClick={_ => setFullSidebar(true)}
                >
                    <IconLeftPanel kind="open" />
                </button>

                <Link to={"/"}>
                    <IconHome className="" />
                </Link>
            </header>
        )
}