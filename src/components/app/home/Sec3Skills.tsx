import { categorizedLogos, translateLogoCat } from "../../../helpers/logoMaps"
import { 
    type LogoCategories, 
    type LogoKey
} from "../../../types/logosMapTypes"

import SkillsLogos from "../../helpers/SkillsLogos"

export default function Sec3Skills() {
    const devLogoKeys = Object.keys(categorizedLogos) as LogoCategories[]

    return (
        <div className="p-4">
            {/* Section Header */}
            <div className="flex gap-5 items-center mb-5 grid-cols-1">
                <svg width={40} height={40}>
                    <use href="/icons.svg#list-alt-check" />
                </svg>
                <h1 className="text-4xl font-bold text-(--text-h)">Skills</h1>
            </div>

            <div className="mb-5">
                <p>I enjoy building full-stack applications with a strong focus on backend development, databases, and data-driven solutions. Here are the technologies I've worked with across my projects.</p>
            </div>

            {/* Skill Logos */}
            <div className="max-w-2xl mx-auto [&_svg]:h-15 [&_svg]:w-15">
                {devLogoKeys.map(cat => (
                    <SkillsLogos 
                        title={translateLogoCat(cat)} 
                        logoKeys={Object.keys(categorizedLogos[cat]) as LogoKey[]}
                        className="mb-5"
                        key={cat}
                    />
                ))}
            </div>
        </div>
    )
}