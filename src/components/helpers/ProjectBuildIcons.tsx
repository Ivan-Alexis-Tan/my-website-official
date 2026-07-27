import { displayLogo } from "../../helpers/logoMaps";
import type { ProjectMapType } from "../../types/types";

export default function ProjectBuild({ build }: { build: ProjectMapType["build"]}) {
    return (
        <div className="flex flex-wrap gap-2 items-center [&_svg]:w-5 [&_svg]:h-5">
            <div className="flex gap-1 items-center">
                <svg width={20} height={20}><use href="/icons.svg#handy-man"/></svg>
                <span><i>Build:</i></span>
            </div>

            {build.map((logo, idx) => (
                <div key={idx}>{displayLogo(logo)}</div>
            ))}
        </div>
    )
}