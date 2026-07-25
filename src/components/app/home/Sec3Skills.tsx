import SkillsLogos from "../../helpers/SkillsLogos"
import { 
    backendLogoKeys,
    databaseLogoKeys,
    frontendLogoKeys,
    langKeys, 
    toolsLogoKeys,
    type LogoKey, 
} from "../../../helpers/logoMaps"

export default function Sec3Skills() {
    const devLogos = {
        languages: mapLogo("Languages", langKeys),
        frontend: mapLogo("Frontend", frontendLogoKeys),
        backend: mapLogo("Backend", backendLogoKeys),
        databases: mapLogo("Databases", databaseLogoKeys),
        tools: mapLogo("Tools", toolsLogoKeys),
        dataTools: mapLogo("Data Tools", databaseLogoKeys),
    }
    const devLogoKeys = Object.keys(devLogos) as (keyof (typeof devLogos))[]

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
                {devLogoKeys.map(key => (
                    <SkillsLogos 
                        title={devLogos[key].title} 
                        logoKeys={devLogos[key].logo}
                        className="mb-5"
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}

function mapLogo(
    title: string, 
    logo: LogoKey[],
) {
    return { title, logo }
}