import { 
    backendLogoKeys,
    backendLogos,
    frontendLogoKeys, 
    frontendLogos, 
    langKeys, 
    langLogos 
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


            <div className="[&>div]:mb-5 [&_svg]:w-15 [&_svg]:h-15 [&_svg]:object-contain
                            [&>div,&>div>div]:flex [&>div,&>div>div]:flex-wrap [&>div,&>div>div]:gap-5"
            >
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-(--text-h)">Languages:</h2>
                    <div>
                        {langKeys.map(lang => (
                            <div key={lang}>
                                {langLogos[lang].comp}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-(--text-h)">Frontend:</h2>
                    <div>
                        {frontendLogoKeys.map(front => (
                            <div key={front}>
                                {frontendLogos[front].comp}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-(--text-h)">Backend:</h2>
                    <div>
                        {backendLogoKeys.map(back => (
                            <div key={back}>
                                {backendLogos[back].comp}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}