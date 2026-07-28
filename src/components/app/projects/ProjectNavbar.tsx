import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import type { ProjectMapType } from "../../../types/types"

import { searchProject } from "../../../helpers/projectsDbHelpers"

import IconClose from "../../svgs/icons/IconClose"
import IconMenu from "../../svgs/icons/IconMenu"
import IconHome from "../../svgs/icons/IconHome"
import IconBookmarkStar from "../../svgs/icons/IconBookmarkStar"
import SidebarDrawer from "./SidebarDrawer"

export default function ProjectNavbar({ className }: { className?: string }) {
    const { pathname } = useLocation()
    
    const [showProj, setShowProj] = useState<boolean>(false)
    const featured = searchProject("class", "featured")

    function refined(projects: ProjectMapType[]) {
        return projects.map(proj => ({name: proj.name, link: proj.route}))
    }

    useEffect(() => {
        setShowProj(false)
    }, [pathname])
    
    return (
        <div className={`${className ?? ""} [&_svg]:w-7! [&_svg]:h-7!`}>
            <div className="flex justify-between items-center">
                <button title="Select a project"
                    className="flex gap-3 items-center hover:*:text-(--accent)"
                    onClick={_ => setShowProj(p => !p)}
                >
                    <IconMenu />
                    <h1 className="text-4xl font-bold text-(--text-h)">Projects</h1>
                </button>

                <Link to={"/"}
                    className="hover:text-(--accent)"
                >
                    <IconHome />
                </Link>
            </div>

            {/* Project Selection Window */}
            {showProj
                && <div className="w-full h-full fixed top-0 left-0 bg-(--text-lucent)
                                   flex justify-center items-center"
                >
                    <div className="m-auto p-2 w-[90%] h-[90%] bg-(--bg) rounded-2xl">
                        <div className="mb-5 flex justify-between items-center">
                            <Link to={'/'} title="Home"
                                className="hover:text-(--accent)"
                            >
                                <IconHome className="w-10 h-10" />
                            </Link>

                            <h1 className="text-3xl font-bold text-(--text-h)">Projects</h1>

                            <span title="Close" className="cursor-pointer hover:text-(--accent)" 
                                onClick={_ => setShowProj(false)}
                            >
                                <IconClose kind="small" />
                            </span>
                        </div>

                        <SidebarDrawer drawerName="Featured"
                            drawerIcon={<IconBookmarkStar />}
                            pocketComponents={refined(featured)}
                            className="[&_svg]:w-10 [&_svg]:h-10"
                        />
                    </div>
                </div>
            }
        </div>
    )
}