import React, { useState } from "react"

import IconKeebArrow from "../../svgs/icons/IconKeebArrow"
import { Link } from "react-router-dom"

type SidebarDrawerProps = {
    drawerName: string
    pocketComponents: {
        name: string
        link: string
    }[]
    drawerIcon?: React.ReactNode
    className?: string
}

export default function SidebarDrawer({ drawerName, pocketComponents, drawerIcon, className }: SidebarDrawerProps) {
    const [openDrawer, setOpenDrawer] = useState<boolean>(true)

    return (
        <div className={className ?? ""}>
            <button className="w-full pl-4 pr-2 py-2 flex justify-between items-center text-start 
                                hover:text-(--accent) hover:[&_svg]:text-(--accent) hover:bg-(--accent-bg)"
                onClick={_ => setOpenDrawer(p => !p)}
            >
                <div className="flex gap-1 items-center">
                    {drawerIcon}
                    <span className="text-xl font-bold">{drawerName}</span>
                </div>

                <IconKeebArrow 
                    kind={openDrawer ? "up" : "down"} 
                    title={false} 
                />
            </button>

            {openDrawer && pocketComponents.length >= 1
                && <nav>
                    {pocketComponents.map(comp => (
                        <Link key={comp.name} 
                            to={comp.link}
                            className="pl-12 flex flex-col py-1.5 hover:bg-(--border) cursor-pointer"
                        >
                            {comp.name}
                        </Link>
                    ))}
                </nav>
            }
        </div>
    )
}