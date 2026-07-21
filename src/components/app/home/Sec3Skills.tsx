import { 
    backendLogoKeys,
    backendLogos,
    databaseLogoKeys,
    databaseLogos,
    dataToolsLogo,
    dataToolsLogoKeys,
    frontendLogoKeys, 
    frontendLogos, 
    langKeys, 
    langLogos, 
    toolsLogo, 
    toolsLogoKeys
} from "../../svgs/logos/logoMaps"

export default function Sec3Skills() {

    return (
        <div className="p-4">
            {/* Section Header */}
            <div className="flex gap-5 items-center mb-5">
                <svg width={40} height={40}>
                    <use href="/icons.svg#list-alt-check" />
                </svg>
                <h1 className="text-4xl font-bold text-(--text-h)">Skills</h1>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="w-full grid grid-cols-[200px_1fr] gap-5 items-center 
                                [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-(--text-h)
                                [&_svg]:w-15 [&_svg]:h-15 [&>div]:flex [&>div]:flex-wrap [&>div]:flex-row [&>div]:gap-5"
                >
                        <h2>Languages:</h2>
                        <div>
                            {langKeys.map(lang => (
                                <div key={lang}>
                                    {langLogos[lang].comp}
                                </div>
                            ))}
                        </div>

                        <h2>Frontend:</h2>
                        <div>
                            {frontendLogoKeys.map(front => (
                                <div key={front}>
                                    {frontendLogos[front].comp}
                                </div>
                            ))}
                        </div>

                        <h2>Backend:</h2>
                        <div>
                            {backendLogoKeys.map(back => (
                                <div key={back}>
                                    {backendLogos[back].comp}
                                </div>
                            ))}
                        </div>

                        <h2>Databases:</h2>
                        <div>
                            {databaseLogoKeys.map(db => (
                                <div key={db}>
                                    {databaseLogos[db].comp}
                                </div>
                            ))}
                        </div>

                        <h2>Tools:</h2>
                        <div>
                            {toolsLogoKeys.map(tool => (
                                <div key={tool}>
                                    {toolsLogo[tool].comp}
                                </div>
                            ))}
                        </div>

                        <h2>Data Tools:</h2>
                        <div>
                            {dataToolsLogoKeys.map(tool => (
                                <div key={tool}>
                                    {dataToolsLogo[tool].comp}
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}