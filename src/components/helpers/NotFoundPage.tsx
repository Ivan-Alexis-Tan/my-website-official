import { Link, useParams } from "react-router-dom"

import IconHome from "../svgs/icons/IconHome"

export default function NotFoundPage() {
    const { id } = useParams()

    return (
        <div className="mx-5 *:mb-5">

            {/* Home and Projects Links */}
            <div className="mt-2 flex gap-5 items-center *:flex *:items-center *:hover:text-(--accent) [&_svg]:w-7 [&_svg]:h-7">
                <Link to={"/"}>
                    <IconHome />
                    <span>Home</span>
                </Link>

                {id &&
                    <Link to={"/projects/personal-finance-manager"}>
                        <svg>
                            <use href="/icons.svg#projects" />
                        </svg>
                        <span>Projects</span>
                    </Link>
                }
            </div>

            <h1 className="text-4xl text-(--text-h) font-bold">
                404 Page not found
            </h1>
        </div>
    )
}