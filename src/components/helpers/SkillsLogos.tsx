import { displayLogo } from "../../helpers/logoMaps"
import type { LogoKey } from "../../types/logosMapTypes"
import type { SVGComponentProps } from "../../types/types"

type SkillsLogosProps = {
    title: string
    logoKeys: LogoKey[]
    className?: string
}

const skillsLogoProps: Partial<Record<LogoKey, SVGComponentProps>> = {
    postgresql: {className: "h-10! w-30!"},
    vercel: {className: "h-10! w-20!"},
    pandas: {className: "text-[rgb(99,62,246)]"}
}


export default function SkillsLogos({ title, logoKeys, className }: SkillsLogosProps) {
    return (
        <div className={`${className ?? ""} py-4 px-2 gap-x-5 gap-y-3
                        grid grid-cols-1 sm:grid-cols-[135px_1fr] items-center
                        bg-(--accent-bg) rounded-[10px]`}
        >
            <h2 className="text-2xl font-bold text-(--text-h) sm:text-end">
                {title}
            </h2>

            <div className="p-2 gap-5 flex flex-wrap justify-evenly items-center bg-(--bg) rounded-[15px]">
                {logoKeys.map(key => (
                    <div key={key}>
                        {displaySkillLogo(key)}
                    </div>
                ))}
            </div>
        </div>
    )
}

function displaySkillLogo(logoKey: LogoKey) {
    if (Object.keys(skillsLogoProps).includes(logoKey)) {
        return displayLogo(logoKey, skillsLogoProps[logoKey])
    }

    return displayLogo(logoKey)
}