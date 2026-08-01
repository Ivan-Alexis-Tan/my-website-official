import { categorizeLogo, displayLogo, translateLogoCat } from "../../../helpers/logoMaps"
import type { LogoCategories } from "../../../types/logosMapTypes"
import type { CustomSVGProps, ProjectMapType } from "../../../types/types"

type CategorizedTechStackProps = {
    logos: ProjectMapType["build"]
    custom?: CustomSVGProps
}

export default function CategorizedTechStack({ logos, custom }: CategorizedTechStackProps) {
    const logoCats = categorizeLogo(logos)
    const categories = Object.keys(logoCats)
    
    return Object.keys(logos).length >= 1
        ? categories.map(cat => (
            <div key={cat}
                className="mb-3 mx-auto max-w-150 p-2 gap-5 grid grid-cols-[95px_1fr] items-center rounded-2xl border"
            >
                <span className="text-end font-bold">
                    {translateLogoCat(cat as LogoCategories)}
                </span>
                
                <div className="py-2 px-3 gap-5 flex flex-wrap justify-evenly items-center rounded-2xl bg-(--social-bg) [&_svg]:w-10 [&_svg]:h-10">
                    {logoCats[cat as LogoCategories]?.map(logo => (
                        <span key={logo}>
                            {displayLogo(logo, custom?.[logo])}
                        </span>
                    ))}
                </div>
            </div>
        ))
        : <p>No tech stack to show</p>
}