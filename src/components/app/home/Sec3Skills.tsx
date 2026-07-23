import SkillsLogos from "../../helpers/SkillsLogos"
import { 
    backendLogos,
    databaseLogos,
    dataToolsLogo,
    frontendLogos, 
    langLogos,
    toolsLogo, 
} from "../../../helpers/logoMaps"

export default function Sec3Skills() {
    const devLogos = {
        languages: mapLogos("Languages", langLogos),
        frontend: mapLogos("Frontend", frontendLogos),
        backend: mapLogos("Backend", backendLogos),
        databases: mapLogos("Databases", databaseLogos),
        tools: mapLogos("Tools", toolsLogo),
        dataTools: mapLogos("Data Tools", dataToolsLogo),
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
                        logos={devLogos[key].logos}
                        className="mb-5"
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}

function mapLogos(
    title: string, 
    logos: Record<string, Record<"comp", React.ReactNode>>,
) {
    return { title, logos }
}